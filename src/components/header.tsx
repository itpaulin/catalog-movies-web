import { Stack, Button } from '@mui/material'
import { useMovieContext } from '../context/useMovieContext'
import { forwardRef } from 'react'

export const Header = forwardRef<HTMLDivElement>((props, ref) => {
  const { reindexMovies } = useMovieContext()

  return (
    <header>
      <Stack ref={ref}>
        <Button variant="contained" size="large" onClick={reindexMovies}>
          Reload Movies
        </Button>
      </Stack>
    </header>
  )
})
