import React from 'react'
import { Grid } from '@mui/material'
import ProductFilters from './../components/shop/ProductFilters'
import Products from './../components/shop/Products'

const Shop = () => {
    return (
        <Grid
            container
            spacing={4}
            padding={0}
            paddingTop='50px'
            color='white'
            fontSize='4em'
            margin={0}
        >
            <Grid item xs={11} md={2}>
                <ProductFilters />
            </Grid>
            <Grid item xs={11} md={9}>
                <Products />
            </Grid>
        </Grid>

    )
}

export default Shop