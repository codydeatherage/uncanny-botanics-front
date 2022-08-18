import React from 'react'
import { Router, Route, Link } from 'react-router'
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import theme from './theme'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavBar >
          <Home />
        </NavBar>
      </Box>
    </ThemeProvider >
  )
}

export default App;
