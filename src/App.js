import React from 'react'
import { Router, Route, Link } from 'react-router'
import { Box } from '@mui/material'
import { styled } from '@mui/system'
import NavBar from './components/NavBar'
import Frame from './components/Frame'
import Home from './components/Home'

const App = () => {
  return (
    <Box>
      <NavBar />
      <Home></Home>
      <Frame />
    </Box>
  )
}

export default App;
