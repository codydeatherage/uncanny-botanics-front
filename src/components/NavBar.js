import React from 'react'
import '../fonts/Winter-Princess.ttf'
import { Link } from 'react-router-dom'
import { styled } from '@mui/system'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import icon from '../assets/eye-plant.svg'
import '../index.css'

const ImgContainer = styled(Box)({
    margin: 'auto 0',
    height: '100%',
    width: 'auto',
    textDecoration: 'none',
    overflow: 'hidden',
    '& img': {
        maxHeight: 45,
        minWidth: 40,
        height: '100%',
        width: 'auto',
        margin: 'auto',
        filter: 'brightness(0) invert(1)'
    }
})

const StoreName = styled(Typography)({
    fontSize: '4em',
    color: 'inherit',
    textDecoration: 'none',
    fontFamily: 'WinterPrincess'
})

const NavLinks = styled(Box)({
    display: 'flex',
    width: '30%',
    height: 50,
    gap: 10,
    marginLeft: 'auto',
    marginRight: 0,
    '& h1': {
        fontSize: '2em',
        margin: 'auto'
    }
})

export default function NavBar({ children }) {
    return (
        <Box>
        <AppBar className="skinny-font" sx={{ maxHeight: 60, width: '100%', backgroundColor: '#212121' }} >
            <Toolbar>
                <ImgContainer component={Link} to="/" >
                    <img src={icon} alt="" />
                </ImgContainer>
                <StoreName component={Link} to="/"> Uncanny Botanics </StoreName>

                <NavLinks>
                    <Link to="/shop" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <h1>Shop</h1>
                    </Link>
                    <h1>About</h1>
                    <h1>Contact Us</h1>
                </NavLinks>
            </Toolbar>
            
        </AppBar>
        {children}
        </Box>
    )
}

