import { useState, useRef } from 'react'
import { Card, CardContent, CardMedia, Typography, Slide, Box } from '@mui/material'
import { styled } from '@mui/system';
import bg from '../../assets/card-bg.jpg'

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

const MediaContent = styled(CardMedia)({
    height: '80%',
    objectFit: 'contain',
    textAlign: 'center',
    '& img': {
        height: '80%',
        width: 'auto',
        marginTop: '2em',
    }
})

const TextContent = styled(CardContent)({
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

const SlideBox = styled(Box)({
    backgroundColor: 'rgba(21,21,21,0.5)',
    height: 300,
    width: 300,
    position: 'absolute',
    top: 0,
    color: 'white'
})

const CategoryItem = ({ title, img }) => {
    const [hovered, setHovered] = useState(false);
    const containerRef = useRef(null);

    return (
        <CategoryCard ref={containerRef} active={hovered} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <MediaContent >
                {img && <img src={img} alt="" />}
            </MediaContent>
            <TextContent >
                <CardTypography> {`― ${title} ―`} </CardTypography>
            </TextContent>
            <Slide direction="up" in={hovered} container={containerRef.current}>
                <SlideBox>
                    {title}
                </SlideBox>
            </Slide>
        </CategoryCard>
    )
}

export default CategoryItem