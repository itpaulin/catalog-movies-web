import { Container, Fab } from '@mui/material'
import { Fragment, useRef } from 'react'
import { MovieList } from './components/movie-list'
import { Header } from './components/header'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

function App() {
  const headerRef = useRef<HTMLDivElement>(null)
  return (
    <Fragment>
      <Container sx={{ overflowX: 'hidden' }}>
        <Header ref={headerRef} />
        <MovieList />
        <Fab
          color="primary"
          aria-label="Go to top"
          sx={{
            position: 'fixed',
            display: 'block',
            bottom: 16,
            right: 16,
            zIndex: 1,
          }}
          onClick={() =>
            headerRef.current?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <ArrowUpwardIcon />
        </Fab>
      </Container>
    </Fragment>
  )
}

export default App
