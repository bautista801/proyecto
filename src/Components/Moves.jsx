import React from 'react'

const Moves = ({ pokedex }) => {
    return (
        <div className='flotante text-white p-0'>
            <h3 className='text-center my-4'>Movimientos</h3>
            <div className='scroll'>
                {
                    pokedex.moves.map((item, i) => {
                        return (
                            <div key={i}>
                                <p className='my-1 text-center'>{item.move.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Moves