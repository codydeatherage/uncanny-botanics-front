import React from 'react'
import { Hero, Categories, CategoryItem, About } from '../components/home/index'
import succulentIcon from '../assets/darksucc.svg'
import plantIcon from '../assets/eye-plant.svg'
export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Categories>
                <CategoryItem title='Succulents' img={succulentIcon} />
                <CategoryItem title='Plants' img={plantIcon} />
                <CategoryItem title='Flowers' />
            </Categories>
        </>
    )
}

