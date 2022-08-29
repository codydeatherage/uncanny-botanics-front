import React from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/system'
import ProductFilters from './../components/shop/ProductFilters'
import Products from './../components/shop/Products'

const Shop = () => {
    return (
        <Grid container spacing={1}
            sx={{
                justifyContent: 'center',
                paddingTop: '80px',
                color: 'white',
                fontSize: '4em'
            }}
        >
            <Grid item xs={3} md={2}>
                <ProductFilters >Filters go here</ProductFilters>
            </Grid>
            <Grid item xs={8} >
                <Products >No products listed</Products>
            </Grid>
        </Grid>

    )
}

export default Shop