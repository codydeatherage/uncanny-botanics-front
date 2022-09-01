import React from 'react'
import { Box } from '@mui/material'
import { Hero, Categories, CategoryItem, About } from '../components/home/index'
import succulentIcon from '../assets/darksucc.svg'
import plantIcon from '../assets/eye-plant.svg'
import flowerIcon from '../assets/rose.svg'
export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Categories>
                <CategoryItem title='Succulents' img={succulentIcon} />
                <CategoryItem title='Plants' img={plantIcon} />
                <CategoryItem title='Flowers' img={flowerIcon} />
            </Categories>
        </>
    )
}

