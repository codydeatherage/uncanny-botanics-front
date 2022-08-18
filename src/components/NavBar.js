import React from 'react'
import '../fonts/Winter-Princess.ttf'
import { styled } from '@mui/system'
import { AppBar, Box, Toolbar, Typography, IconButton, Icon } from '@mui/material'
import icon from '../assets/eye-plant.svg'
import '../index.css'

const ImgContainer = styled(Box)({
    margin: 'auto 0',
    height: '100%',
    width: 'auto',

    '& img': {
        maxHeight: 45,
        minWidth: 40,
        height: '100%',
        width: 'auto',
        margin: 'auto',
        filter: 'brightness(0) invert(1)'
    }
})

const StoreName = styled('h1')({
    fontSize: '4em',
})

const NavLinks = styled(Box)({
    display: 'flex',
    width: '30%',
    height: 50,
    gap: 10,
    marginLeft: 'auto',
    marginRight: 0,
    '& h1':{
        fontSize: '2em',
        margin: 'auto'
    }
})

export default function NavBar({children}) {
    return (
        <Box className="skinny-font" sx={{ flexGrow: 1, height: '100%', width: '100%' }}>
            <AppBar sx={{ maxHeight: 60, backgroundColor: '#212121' }} position="static">
                <Toolbar >
                    <ImgContainer >
                        <img src={icon} alt="" />
                    </ImgContainer>
                    <StoreName> Uncanny Botanics </StoreName>
                    <NavLinks>
                        <h1>Shop</h1>
                        <h1>About</h1>
                        <h1>Contact Us</h1>
                    </NavLinks>
                </Toolbar>
            </AppBar>
            {children}
        </Box>
    )
}

