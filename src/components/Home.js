import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Box, Button } from '@mui/material'
import { styled } from '@mui/system'
import img from '../succtents.svg'
import bg from '../bg.jpg'

const Container = styled(Box)({
    position: 'relative',
   /*  backgroundColor: '#212121', */
    height: '80vh',
    width: '100vw',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',

    '& #tsparticles': {   // This is the id of the div created by the Particles component
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
    width: '30%',

    '& img':{
        height: '100%',
        width: 'auto',
        margin: 'auto'
    }
})

const TextContent  = styled(Box)({
    position: 'absolute',
    left: '50%',
    top: '20%',
    height: '60%',
    width: '40%',
    textAlign: 'center',/* 
    fontFamily: 'WinterPrincess', */

    '& h1':{
        fontSize: 70
    },

    '& h4':{
        fontSize: 30
    },  

    '& h1, h4':{
        color: 'white'
    }
})

const ExploreButton = styled(Button)({
    outline: '1px solid green',
    height: 80,
    width: 200,
    fontSize: 20
})

const Home = () => {
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
                            value: "#212121",
                        },
                        image:  `url(${bg})`,
                        repeat: 'no-repeat',
                        size: '100%'
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
                            value: 50,
                            limit: 50,
                            random: false,
                            density: 1
                        },
                        color: {
                            value: "#EB5D2C"
                        },
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
            <TextContent>
                <h1>You have been called.</h1>
                <h4>Enter into a world of green life and find something that speaks to you.</h4>
                <ExploreButton variant="contained" color="success">Explore</ExploreButton>
            </TextContent>
        </Container>
    );
}

export default Home