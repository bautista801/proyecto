import React from 'react'

const Stats = ({ pokedex }) => {
    return (
        <div>
            {/* niveles de poderes */}

            <div className='niveles text-center'>
                {
                    pokedex.stats.map((item, i) => {
                        return (
                            <div key={i} className='poderes d-flex'>
                                <h4 className='text-white m-auto'>{item.stat.name}: {item.base_stat}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Stats