import React from 'react'
import { Box, Grid, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel } from '@mui/material'
import { styled } from '@mui/system'
const Form = styled(FormControl)({
    color: 'black',
    fontFamily: 'WinterPrincess',
    marginLeft: '5%'
})
const ProductFilters = () => {
    return (
        <Box
            sx={{
                width: '100%',
                minWidth: 'fit-content',
                height: '500px',
                border: '2px solid #212121'
            }}
        >
            <Box
                sx={{
                    color: 'white',
                    fontSize: '35px',
                    paddingLeft: '5%',
                    backgroundColor: '#212121'
                }}
            >Shop By</Box>
            <Form>
                <FormLabel id="categories-radio-group">Category</FormLabel>
                <RadioGroup
                    aria-labelledby="categories-radio-group"
                    defaultValue="flowers"
                    name="categories-radio-group"

                >
                    <FormControlLabel value="flowers" control={<Radio sx={{ padding: '2px 5%' }} />} label="Flowers" />
                    <FormControlLabel value="plants" control={<Radio sx={{ padding: '2px 5%' }} />} label="Plants" />
                    <FormControlLabel value="succulents" control={<Radio sx={{ padding: '2px 5%' }} />} label="Succulents" />
                </RadioGroup>
            </Form>

        </Box>
    )
}

export default ProductFilters