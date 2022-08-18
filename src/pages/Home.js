import React from 'react'
import { Hero, Categories, CategoryItem, About } from '../components/home/index'
import icon from '../assets/darksucc.svg'

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Categories>
                <CategoryItem title='Succulents' img={icon} />
                <CategoryItem title='Plants' />
                <CategoryItem title='Flowers' />
            </Categories>
        </>
    )
}

