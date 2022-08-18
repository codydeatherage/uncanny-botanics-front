import React from 'react'
import { styled } from '@mui/system'

const Container = styled('div')({
    height: 300,
    width: '100%',
    backgroundColor: '#91cfad',
    textAlign: 'center',
    '& h1, p':{
        margin: 0
    },
})

const About = () => {
    return (
        <Container >
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Container>
    )
}

export default About