import { Stack, Button } from '@mui/material'
import { useMovieContext } from '../context/useMovieContext'
import { forwardRef } from 'react'

export const Header = forwardRef<HTMLDivElement>((_, ref) => {
  const { reindexMovies } = useMovieContext()

  return (
    <Stack ref={ref} component={'header'}>
      <Button variant="contained" size="large" onClick={reindexMovies}>
        Reload Movies
      </Button>
    </Stack>
  )
})
