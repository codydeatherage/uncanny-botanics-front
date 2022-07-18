//will contain 1 frame to be  containing photos of plants for sale

import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
// import React from 'react'
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Container = styled('div')({
    width: '100vw',
    border: '1px solid blue',
    padding: '5vh 5vw',
})

const CategoryCard = styled(Card)({
    maxWidth: 300,
    height: 300,
    border: '1px solid red',
})

const CategoryCardMedia = styled(CardMedia)({
    height: '80%',
    borderBottom: '1px solid black',
})

const CategoryCardContent = styled(CardContent)({
    padding: 0,
    '& p':{
        padding: 0,
    }
})

const CardTypography = styled(Typography)({
    padding: 0,
    width: 100,
})

const Frame = () => {
  return (
    <Container>
        <CategoryCard>
            <CategoryCardMedia />
            <CategoryCardContent>
                <CardTypography>
                    {/* general variable to be changed between Succs, Plants, and Flowers */}
                    SUCCS
                    {/* <CardActions> */}
                        <IconButton>
                            <ArrowRightAltIcon />
                        </IconButton>
                    {/* </CardActions> */}
                </CardTypography>
                
            </CategoryCardContent>
        </CategoryCard>
    </Container>

  )
}

export default Frame