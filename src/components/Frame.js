//will contain 1 frame to be  containing photos of plants for sale

import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
// import React from 'react'
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const CategoryCard = styled(Card)({
    width: 300,
    height: 300,
    borderRadius: 10,
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
    width: 150,
    // border: '1px solid green',
})

const Frame = ({ title }) => {
  return (
        <CategoryCard>
            <CategoryCardMedia />
            <CategoryCardContent>
                <CardTypography>
                    {title}
                    {/* <CardActions> */}
                        <IconButton>
                            <ArrowRightAltIcon />
                        </IconButton>
                    {/* </CardActions> */}
                </CardTypography>
                
            </CategoryCardContent>
        </CategoryCard>

  )
}

export default Frame