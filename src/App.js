import React from 'react'
import { Router, Route, Link } from 'react-router'
import { Box } from '@mui/material'
import { styled } from '@mui/system'
import NavBar from './components/NavBar'
import Frame from './components/Frame'

const App = () => {
  return (
    <Box>
      <NavBar />
      <Frame />
    </Box>
  )
}

export default App;
