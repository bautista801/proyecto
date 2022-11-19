import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ pokedex }) => {
    return (
        <div className='menu m-0'>
            <div className='d-flex text-white m-0'>
                <h4 className='my-auto ms-3'>{pokedex.id}</h4>
                <h4 className='my-auto mx-auto'>{pokedex.name}</h4>
                <Link className='btn lila text-white my-auto me-1' to='/'>X</Link>
            </div>
        </div>
    )
}

export default Menu