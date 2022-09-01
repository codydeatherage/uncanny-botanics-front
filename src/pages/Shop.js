import React from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/system'
import ProductFilters from './../components/shop/ProductFilters'
import Products from './../components/shop/Products'

const Shop = () => {
    return (
        <Grid container spacing={4}
            sx={{
                paddingTop: '50px',
                color: 'white',
                fontSize: '4em',
                margin: 0
            }}
        >
            <Grid item xs={4} md={2}>
                <ProductFilters >Filters go here</ProductFilters>
            </Grid>
            <Grid item xs={8} sx={{ marginLeft: '1.5em' }}>
                <Products >No products listed</Products>
            </Grid>
        </Grid>

    )
}

export default Shop