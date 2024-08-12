import { Container } from '@mui/material'
import { Fragment, useRef } from 'react'
import { MovieList } from './components/MovieList'
import { Header } from './components/Header'
import { FabGoTop } from './components/FabGoTop'

function App() {
  const headerRef = useRef<HTMLDivElement>(null)

  return (
    <Fragment>
      <Container sx={{ overflowX: 'hidden' }}>
        <Header ref={headerRef} />
        <MovieList />
        <FabGoTop refSpect={headerRef} />
      </Container>
    </Fragment>
  )
}

export default App
