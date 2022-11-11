import React from 'react'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'

function Category() {
  return (
    <section className='category-conteiner'>
        <NavLink to={'/cuisine/Italian'} className='category-items'>
            <FaPizzaSlice/>
            <p className='category-btn'>Italian</p>
        </NavLink>
        <NavLink to={'/cuisine/American'} className='category-items'>
            <FaHamburger/>
            <p className='category-btn'>American</p>
        </NavLink>
        <NavLink to={'/cuisine/Thai'} className='category-items'>
            <GiNoodles/>
            <p className='category-btn'>Thai</p>
        </NavLink>
        <NavLink to={'/cuisine/Japanese'} className='category-items'>
            <GiChopsticks/>
            <p className='category-btn'>Japanese</p>
        </NavLink>
    </section>
  )
}

export default Category