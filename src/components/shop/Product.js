import React from 'react'
import { Button, Card, CardMedia, CardContent, CardActionArea } from '@mui/material'
import { styled } from '@mui/system'
import placeholder from '../../assets/eye-plant.svg'

const ProductCard = styled(Card)({
    backgroundColor: '#212121',
    height: 300,
})

const ProductContent = styled(CardContent)({
    height: '15%',
    fontSize: 20,
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white'
})

const AddToCart = styled(Button)({
    width: '100%',
    height: '50px',
    backgroundColor: 'white',
    borderRadius: 0
})

const Product = () => {
    return (
        <ProductCard>
            <CardMedia
                component="img"
                height="50%"
                image={placeholder}
                alt="eye flower"
                sx={{ objectFit: 'contain', padding: '0.5em 1em 0 0', filter: 'brightness(0) invert(1)' }}
            >
            </CardMedia>
            <ProductContent >
                <p>Product Name</p>
                <p>$100.00</p>
            </ProductContent>
            <CardActionArea >
                <AddToCart>Add to Cart</AddToCart>
            </CardActionArea>
        </ProductCard>
    )
}

export default Product