import { Stack, Grid, CircularProgress } from '@mui/material'
import { MovieItemCard } from './movie-item-card'
import { Movie } from '../types/movie'
import { useMovieContext } from '../context/useMovieContext'
import { useCallback, useEffect } from 'react'

export const MovieList = () => {
  const { data, isFetching, fetchNextPage, hasNextPage } = useMovieContext()
  console.log('🚀 ~ MovieList ~ data:', data)

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.offsetHeight
    ) {
      fetchNextPage()
    }
  }, [fetchNextPage])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, fetchNextPage, hasNextPage, isFetching])

  return (
    <Stack justifyContent={'center'} alignItems={'center'} mt={2}>
      <Grid
        container
        alignItems="start"
        justifyContent={'center'}
        direction={'row'}
        spacing={3}
      >
        {data?.map((movie: Movie) => (
          <Grid item key={movie.id}>
            <MovieItemCard title={movie.title} imagePath={movie.imagePath} />
          </Grid>
        ))}
      </Grid>

      {isFetching && <CircularProgress size={300} />}
    </Stack>
  )
}
