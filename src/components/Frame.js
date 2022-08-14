//will contain 1 frame to be  containing photos of plants for sale
import { useState, useRef } from 'react'
import { Card, CardContent, CardMedia, Typography, Slide, Box } from '@mui/material'
import { styled } from '@mui/system';
import bg from '../card-bg.jpg'

const CategoryCard = styled(Card)(({ active }) => ({
    width: 300,
    height: 300,
    position: 'relative',
    borderRadius: 10,
    filter: active ? 'invert(1)' : 'invert(0)',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}))

const CategoryCardMedia = styled(CardMedia)({
    height: '80%',
    '& img': {
        height: 'auto',
        width: '90%',
        margin: '0 5%',
    }
})

const CategoryCardContent = styled(CardContent)({
    padding: 0,
    color: 'white',
    '& p': {
        fontSize: '2em',
        padding: 0,
    }
})

const CardTypography = styled(Typography)({
    padding: 0,
    width: 'fit-content',
    textAlign: 'center',
    margin: '0 auto'
})

const Frame = ({ title, img }) => {
    const [hovered, setHovered] = useState(false);
    const containerRef = useRef(null);

    return (
        <CategoryCard ref={containerRef} active={hovered} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <CategoryCardMedia >
                {img && <img src={img} alt="" />}
            </CategoryCardMedia>
            <CategoryCardContent >
                <CardTypography> {`― ${title} ―`} </CardTypography>
            </CategoryCardContent>
            <Slide direction="up" in={hovered} container={containerRef.current}>
                <Box sx={{ backgroundColor: 'rgba(21,21,21,0.5)', height: 300, width: 300, position: 'absolute', top: 0, filter: hovered ? 'invert(1)' : 'invert(0)' }}>
                    werasdfsf
                </Box>
            </Slide>
        </CategoryCard>
    )
}

export default Frame