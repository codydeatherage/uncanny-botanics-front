import React from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/system'
import Product from './Product'

const Products = () => {
    return (
        <Box
            sx={{
                height: '500px',
                minWidth: '480px',
                outline: '1px solid red',
                display: 'flex',
                gap: '25px',
                padding: '10px',
                flexWrap: 'wrap'
            }}
        >
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </Box>
    )
}

export default Products