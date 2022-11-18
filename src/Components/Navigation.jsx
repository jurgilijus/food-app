import React from 'react'
import Category from './Category'
import Search from './Search'
// import {GiNoodles, GiChopsticks} from 'react-icons/gi'
// import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'

function Navigation() {
  return(
  <div className='navigation-conteiner'>
  <Search/>
  <Category selectable={[
    {id: 1, to: '/cuisine/African', title: 'African'},
    {id: 2, to: '/cuisine/American', title: 'American'}, 
    {id: 3, to: '/cuisine/British', title: 'British'}, 
    {id: 4, to: '/cuisine/Cajun',title: 'Cajun' }, 
    {id: 5, to: '/cuisine/Caribbean', title: 'Caribbean'},
    {id: 6, to: '/cuisine/Chinese', title: 'Chinese'},
    {id: 7, to: '/cuisine/Eastern European', title: 'Eastern European'},
    {id: 8, to: '/cuisine/European', title: 'European'},
    {id: 9, to: '/cuisine/French', title: 'French'},
    {id: 10, to: '/cuisine/German', title: 'German'},
    {id: 11, to: '/cuisine/Greek', title: 'Greek'},
    {id: 12, to: '/cuisine/Indian', title: 'Irish'},
    {id: 13, to: '/cuisine/French', title: 'Italian'},
    {id: 14, to: '/cuisine/Japanese', title: 'Japanese'},
    {id: 15, to: '/cuisine/Jewish', title: 'Jewish'},
    {id: 16, to: '/cuisine/Korean', title: 'Korean'},
    {id: 17, to: '/cuisine/Latin American', title: 'Latin American'},
    {id: 18, to: '/cuisine/Mediterranean', title: 'Mediterranean'},
    {id: 19, to: '/cuisine/Mexican', title: 'Mexican'},
    {id: 20, to: '/cuisine/Middle Eastern', title: 'Middle Eastern'},
    {id: 21, to: '/cuisine/Nordic', title: 'Nordic'},
    {id: 22, to: '/cuisine/Southern', title: 'Southern'},
    {id: 23, to: '/cuisine/Spanish', title: 'Spanish'},
    {id: 24, to: '/cuisine/Thai', title: 'Thai'},
    {id: 25, to: '/cuisine/Vietnamese', title: 'Vietnamese'}
    ]}/>
  </div>
  )
}

export default Navigation