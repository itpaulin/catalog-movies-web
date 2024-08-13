import { PropsWithChildren, useCallback, useState } from 'react'
import { IMovieContextValues, MovieContext } from './MovieContext'
import { useInfiniteQuery, useQueryClient } from 'react-query'
import axiosInstance from '../api/axiosInstance'

export const MovieContextProvider = ({ children }: PropsWithChildren) => {
  const [isLoadingReinxed, setIsLoadingReinxed] = useState<boolean>(false)
  const queryClient = useQueryClient()
  const [limit] = useState(10)

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axiosInstance.get('/movies', {
        params: {
          page: pageParam,
          limit,
        },
      })
      return response.data
    },

    getNextPageParam: (lastPage, allPages) => {
      const maxPages = Math.ceil(lastPage.total / limit)
      const nextPage = allPages.length + 1
      return nextPage <= maxPages ? nextPage : undefined
    },
  })

  const reindexMovies = useCallback(async () => {
    setIsLoadingReinxed(true)
    try {
      queryClient.resetQueries('movies')
      await axiosInstance.get('/movies/renew')
      queryClient.invalidateQueries('movies')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Erro ao reindexar filmes:', error)
      alert('Erro ao reindexar filmes.')
    } finally {
      setIsLoadingReinxed(false)
    }
  }, [queryClient])

  const value: IMovieContextValues = {
    data: data?.pages.flatMap((page) => page.data),
    isFetching: isFetching || isLoadingReinxed,
    reindexMovies,
    fetchNextPage: async () => await fetchNextPage(),
    hasNextPage,
  }
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}
