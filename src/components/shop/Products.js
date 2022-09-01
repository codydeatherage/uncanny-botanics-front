import React from 'react'
import { Box } from '@mui/material'
import Product from './Product'

const Products = () => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                height: 'fit-content',
                gap: '0.5em',
                minWidth: '480px',
                border: '2px solid red',
                justifyContent: 'center',
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