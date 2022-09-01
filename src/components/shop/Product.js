import React from 'react'
import { Button, Card, CardMedia, CardContent, CardActionArea, Stack } from '@mui/material'
import { styled } from '@mui/system'
import placeholder from '../../assets/eye-plant.svg'
const ProductCard = styled(Card)({
    backgroundColor: '#212121',
    maxHeight: '400px',
    height: '70%',
    maxWidth: '450px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexGrow: 1

})

const AddToCart = styled(Button)({
    width: '100%',
    height: '50px',
    backgroundColor: 'white',
    zIndex: 99,
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
            <CardContent sx={{ paddingTop: 0, height: '15%', fontSize: '20px', display: 'flex', margin: 'auto', gap: '2%', justifyContent: 'space-between', color: 'white' }}>
                <p>Product Name</p>
                <p>$100.00</p>
            </CardContent>

            <CardActionArea >
                <AddToCart>Add to Cart</AddToCart>
            </CardActionArea>
        </ProductCard>
    )
}

export default Product