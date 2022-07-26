import React from 'react'
import { Router, Route, Link } from 'react-router'
import { Box } from '@mui/material'
import { styled } from '@mui/system'
import NavBar from './components/NavBar'
import Frame from './components/Frame'
import FrameCard from './components/FrameCard'

const App = () => {
  return (
    <Box>
      <NavBar />
      <FrameCard>
        <Frame title='Succulents'/>
        <Frame title='Plants'/>
        <Frame title='Flowers'/>
      </FrameCard>

    </Box>
  )
}

export default App;
