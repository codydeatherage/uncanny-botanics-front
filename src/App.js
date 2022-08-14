import React from 'react'
import { Router, Route, Link } from 'react-router'
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { styled } from '@mui/system'
import NavBar from './components/NavBar'
import Frame from './components/Frame'
import Home from './components/Home'
import FrameCard from './components/FrameCard'
import theme from './theme'
import img1 from './darksucc.svg'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>

        <NavBar />

        <Home></Home>

        <FrameCard>
          <Frame title='Succulents' img={img1}/>
          <Frame title='Plants' />
          <Frame title='Flowers' />
        </FrameCard>

      </Box>
    </ThemeProvider >
  )
}

export default App;
