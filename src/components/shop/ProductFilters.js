import React, { useState } from 'react'
import { Box, Grid, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel, Slider } from '@mui/material'
import { styled } from '@mui/system'
const Form = styled(FormControl)({
    color: 'black',
    fontFamily: 'WinterPrincess',
    marginLeft: '5%'
})
/*https://mui.com/material-ui/react-slider/ */
const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});

const ProductFilters = () => {
    const [priceRange, setPriceRange] = useState([0, 600]);
    const handleChange = (e, value) => {
        setPriceRange(value);
    }

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
                <FormLabel id="benefits-radio-group">Benefits</FormLabel>
                <RadioGroup
                    aria-labelledby="benefits-radio-group"
                    name="benefits-radio-group"
                >
                    <FormControlLabel value="pet-friendly" control={<Radio sx={{ padding: '2px 5%' }} />} label="Pet-Friendly" />
                    <FormControlLabel value="easy-care" control={<Radio sx={{ padding: '2px 5%' }} />} label="Easy Care" />

                </RadioGroup>

                <FormLabel id="price-range">Price</FormLabel>
                <Box sx={{ width: '300px' }}>
                    <PrettoSlider
                        getAriaLabel={() => 'Price range'}
                        value={priceRange}
                        min={0}
                        step={25}
                        marks
                        max={600}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="price-range"
                    />
                </Box>
            </Form>

        </Box>
    )
}

export default ProductFilters