import React from 'react'
import { Card, CardMedia, CardContent } from '@mui/material'
import { styled } from '@mui/system'
import placeholder from '../../assets/eye-plant.svg'
const ProductCard = styled(Card)({
    backgroundColor: '#212121',
    maxHeight: '400px',
    height: '70%',
    maxWidth: '400px'
})
const Product = () => {
    return (
        <ProductCard>
            <CardMedia
                component="img"
                height="70%"
                image={placeholder}
                alt="eye flower"
                sx={{ objectFit: 'contain', padding: '0.5em 1em 0 0', filter: 'brightness(0) invert(1)' }}
            >

            </CardMedia>
            <CardContent sx={{ fontSize: '20px', display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                <p>Product Name</p>
                <p>$100.00</p>
            </CardContent>
        </ProductCard>
    )
}

export default Product