import { Stack, Button } from '@mui/material'
import { useMovieContext } from '../context/useMovieContext'

export const Header = () => {
  const { reindexMovies } = useMovieContext()

  return (
    <header>
      <Stack>
        <Button variant="contained" size="large" onClick={reindexMovies}>
          Reload Movies
        </Button>
      </Stack>
    </header>
  )
}
