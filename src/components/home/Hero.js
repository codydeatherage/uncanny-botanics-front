import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Box, Button } from '@mui/material'
import { styled } from '@mui/system'
import img from '../../assets/succtents.svg'
import bg from '../../assets/bg.jpg'
import '../../index.css'

const Container = styled(Box)({
    position: 'relative',
    height: '80vh',
    left: 0,
    right: 0,
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    zIndex: 0,
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    marginTop: '60px',
    padding: 0,
    '& #tsparticles': {
        height: '80vh',
        position: 'absolute',
        left: 0,
        right: 0,
        margin: 0,
        padding: 0,
        zIndex: 0,
    }
})

const ImgContainer = styled(Box)({
    position: 'absolute',
    height: '100%',
    zIndex: 9,
    padding: 0,

    '& img': {
        position: 'relative',
        maxHeight: '700px',
        height: '100%',
        width: 'auto',
        '@media (max-width: 900px)': {
            width: '100%',
            height: '100%',
            transform: 'scale(1.2)',
            left: '5%',
        },
        '@media (max-width: 600px)': {
            transform: 'scale(1.5)',
        },
    },
    '@media (max-width: 900px)': {
        width: 'fit-content',
        height: '100%',
        textAlign: 'center',
        position: 'relative'
    },
})

const TextContent = styled(Box)({
    position: 'absolute',
    height: '50%',
    width: '40%',
    textAlign: 'center',
    fontFamily: "Trirong",
    backgroundColor: 'rgba(33, 66, 44, 0.5)',
    zIndex: 99,
    left: '55%',
    '@media (max-width: 900px)': {
        left: '30%',
        tranform: 'translateX(-50%)',
    },
    '& h1': {
        fontSize: 50
    },

    '& h4': {
        fontSize: 15
    },

    '& h1, h4': {
        color: 'white'
    }
})

const ExploreButton = styled(Button)({
    outline: '1px solid green',
    height: 80,
    width: 200,
    fontSize: 20
})

const Hero = () => {
    const particlesInit = async (main) => {
        console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <Container>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: {
                        enable: false
                    },
                    background: {
                        color: {
                            value: "#00FFFFFF",
                        },
                        image: `url(${bg})`,
                        repeat: 'no-repeat',
                        size: 'cover'
                    },
                    fpsLimit: 120,
                    interactivity: {
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 0.1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 400,
                            },
                            value: 120,
                        },
                        opacity: {
                            value: 1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                    absorbers: {
                        orbits: false,
                        destroy: true,
                        size: {
                            value: 25,
                            limit: 50,
                            random: false,
                            density: 1
                        },
                        opacity: 0,
                        position: {
                            x: 25,
                            y: 50
                        }
                    }
                }}
            />

            <ImgContainer>
                <img src={img} alt=""></img>
            </ImgContainer>

            <TextContent >
                <h1>You have been called.</h1>
                <h4>Enter into a world of green life and find something that speaks to you.</h4>
                <ExploreButton variant="contained" color="success">Explore</ExploreButton>
            </TextContent>

        </Container>
    );
}

export default Hero