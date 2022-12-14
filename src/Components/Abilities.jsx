import React from 'react'

const Abilities = ({ pokedex }) => {
    return (
        <div>

            <div className='detalles'>

                {/* Tipos */}

                <div className='tipo d-flex'>
                    <h3 className='text-white m-auto d-inline'>Tipo:</h3>
                    {
                        pokedex.types.map((poke, i) => {
                            return (

                                <span key={i} className='text-white m-auto'>{poke.type.name}</span>

                            )
                        })
                    }
                </div>

                {/* Altura */}

                <div className='tipo d-flex'>
                    <h3 className='text-white m-auto d-inline'>Altura:</h3>
                    <span className='text-white m-auto'>{pokedex.height}</span>
                </div>

                {/* Peso */}

                <div className='tipo d-flex'>
                    <h3 className='text-white m-auto d-inline'>Peso:</h3>
                    <span className='text-white m-auto'>{pokedex.weight}</span>
                </div>
            </div>

            {/* Habilidades */}

            <div className='habilidades'>
                <h3>Habilidad</h3>
                {
                    pokedex.abilities.map((item, i) => {
                        return (
                            <p className='my-auto' key={i}>{item.ability.name}</p>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Abilities