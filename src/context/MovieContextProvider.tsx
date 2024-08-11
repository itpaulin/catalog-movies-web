import { PropsWithChildren, useCallback, useState } from 'react'
import { IMovieContextValues, MovieContext } from './MovieContext'
import { useInfiniteQuery, useQueryClient } from 'react-query'
import axios from 'axios'

export const MovieContextProvider = ({ children }: PropsWithChildren) => {
  const queryClient = useQueryClient()
  const [limit] = useState(20)

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axios.get('http://localhost:3000/movies', {
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
    await axios.get('http://localhost:3000/movies/update')
    queryClient.invalidateQueries('movies')
  }, [queryClient])

  const value: IMovieContextValues = {
    data: data?.pages.flatMap((page) => page.data),
    isFetching,
    reindexMovies,
    fetchNextPage,
    hasNextPage,
  }
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}
