// src/theme.ts
import { createTheme } from '@mui/material/styles'
const theme = createTheme({
  palette: {
    primary: {
      main: '#FBBF23',
    },
    secondary: {
      main: '#1976d2', // Cor primária do tema
    },
    text: {
      primary: '#FFF', // Cor do texto principal
      secondary: '#F6F6F6', // Cor do texto secundário
    },
  },
})

export default theme
