import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme.ts'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MovieContextProvider } from './context/MovieContextProvider.tsx'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MovieContextProvider>
          <App />
        </MovieContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
