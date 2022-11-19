import React from 'react'
import '../styles/CardDetail.css'   
import Abilities from './Abilities'
import Stats from './Stats'
import Moves from './Moves'
import Menu from './Menu'


const CardDetail = ({ pokedex }) => {

    return (
        <div className='div-principal mx-auto p-0 mb-5'>

            {/* Menú */}

            <Menu pokedex={pokedex} />

            {
                (!pokedex) ? "" :

                    <div className='m-auto d-flex principal'>

                        <div className='flex-media'>


                            {/* Imagen */}

                            <div className='info-principal d-flex mt-0'>
                                <img className='img-pokemon-detail mx-auto' src={pokedex.sprites.other.home.front_default} alt={pokedex.name} />
                            </div>

                            <div className='caracteristicas d-flex mt-0'>

                                {/* Detalles */}

                                <Abilities pokedex={pokedex} />

                                <Stats pokedex={pokedex} />

                            </div>

                        </div>

                        <Moves pokedex={pokedex} />


                    </div>
            }

        </div>
    )
}

export default CardDetail