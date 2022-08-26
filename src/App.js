import React from 'react'
import { Router, Routes, Route, Link } from 'react-router'
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import Home from './pages/Home'
import Shop from './pages/Shop'
import NavBar from './components/NavBar'
import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>
      </NavBar>
    </ThemeProvider >
  )
}

export default App;
