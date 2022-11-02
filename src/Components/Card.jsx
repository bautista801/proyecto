import React from 'react'
import '../styles/Card.css'
import { Link } from 'react-router-dom'
import Buttons from './Buttons'


const Card = ({ setPokedata, pokedata, load, infoPoke, setUrl, prevUrl, nextUrl }) => {

    return (
        <div className='col-12 mt-2 mx-auto'>

            <div className='columna mx-auto'>
                {
                    load ? 
                        <div className="spinner-border text-dark" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div> 
                        :
                        pokedata.map((item) => {
                            return (

                                <div key={item.id} className='carta' onClick={() => infoPoke(item)}>
                                    <img
                                        className='img-pokemon m-2'
                                        src={item.sprites.other.home.front_default}
                                        alt={item.name}
                                    />
                                    <h2 className='name-pokemon m-3'>{item.name}</h2>
                                    <Link className='btn text-white' to='/Detail'>Ver más</Link>
                                </div>

                            )
                        }
                    )
                }
            </div>

            <Buttons setUrl={setUrl} prevUrl={prevUrl} nextUrl={nextUrl} pokedata={pokedata} setPokedata={setPokedata} />

        </div>
    )
}

export default Card