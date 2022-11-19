import React from 'react'
import '../styles/Card.css'

const Buttons = ({ setPokedata, setUrl, prevUrl, nextUrl }) => {
    //console.log(prevUrl)
    return (
        <div className='mx-auto'>
            <div className='my-5 center'>
                
    
                    <button
                    disabled={prevUrl ? false : true}
                        onClick={() => {
                            setPokedata([])
                            setUrl(prevUrl)
                        }}
                        className={`${ !prevUrl ? 'disabled' : ''} previous me-4`}>
                        Anterior
                    </button>
                    

                    <button
                    disabled={nextUrl ? false : true}
                        onClick={() => {
                            setPokedata([])
                            setUrl(nextUrl)
                        }}
                        className={`${ !nextUrl ? 'disabled' : ''} next ms-4`}>
                        Siguiente
                    </button>

            </div>
        </div>
    )
}

export default Buttons