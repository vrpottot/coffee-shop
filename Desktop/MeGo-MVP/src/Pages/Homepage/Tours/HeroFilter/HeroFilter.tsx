import React from 'react'
import './HeroFilter.css'
import { SearchInput } from '../../components/Hero/SearchInput/SearchInput'
const HeroFilter: React.FC = () =>  {
    return (
        <div className='bg-hero'>
           <h1 className='text-hero'>Хан-Тенгри</h1>

           <SearchInput placeholder="Искать туры, популярные места" />
        </div>
    )
}
export default HeroFilter