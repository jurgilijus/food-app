import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'

function Category(props) {
    
    const [down, setDown] = useState(false)
    const handleClick = () => setDown(!down)
    
    const [category, setCategory] = useState('Select food category')
    
    const handleCategory = (categoryName) =>{
        setCategory(categoryName)
    }
    
    const [openCategory, setOpenCategory] = useState(false)
    
    const onButtonOpen = () => {
        setOpenCategory((prevOpen) => !prevOpen)
    }
    
    const [closeCategoryList, setCloseCategoryList] = useState(true)
    const handleCloseCategorys = () => {
        if (!closeCategoryList) {
            setCloseCategoryList()
        }
        onButtonOpen()
    }
    
  return (
    <section className='category-conteiner'>
        <div className="category-mobile ">
            <div onClick={()=>{onButtonOpen()}} className="category-name">
                <p>{category}</p>
                <label onClick={handleClick} className='category-arrow'>{!down ? <IoIosArrowDown size={35}/> : <IoIosArrowUp size={35}/>}</label>
            </div>
            {openCategory && (
            <ul className={!closeCategoryList ? 'categorys categorys-hide' : 'categorys'} onClick={handleCloseCategorys}>
                
            {props.selectable.map((categoryName) => {
                return <div key={categoryName.id}>
                <NavLink onClick={() =>{handleCategory(categoryName.title)}} to={categoryName.to}>
                <p id="category">{categoryName.title}</p>
                </NavLink>
                </div>
            })}
            </ul>
            )}
        </div>
    </section>
  )
}

export default Category