import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Components/Card';
import CardDetail from './Components/CardDetail';
import './styles/Card.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import logo from './images/logo.png'

function App() {

  const [pokedata, setPokedata] = useState([])

  const [load, setLoad] = useState(true)

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5')

  const [nextUrl, setNextUrl] = useState()

  const [prevUrl, setPrevUrl] = useState()

  const [pokedex, setPokedex] = useState()


  useEffect(() => {

    const pokemones = async() => {
      setLoad(true)
      const res = await axios.get(url)
      setNextUrl(res.data.next)
      setPrevUrl(res.data.previous)
      getPokemon(res.data.results)
      setLoad(false)
    }

    pokemones()
  }, [url])


  const getPokemon = async(res) => {
    res.map(async(item) => {
      const result = await axios.get(item.url)
      setPokedata(state => {
        state=[...state, result.data]
        state.sort((a,b) => a.id > b.id ? 1: -1)
        return state
      })
    })
  }

  return ( 
      <BrowserRouter className='container'>
        <h1 className='text-center my-5'>
          <img src={logo} alt="Pokemon Logo" />
        </h1>
        <div className='row mx-0'>
          <Routes>
            <Route 
              path='/' 
              element={
                <Card 
                  pokedata={pokedata} 
                  setPokedata={setPokedata}
                  load={load}
                  setUrl={setUrl}
                  nextUrl={nextUrl}
                  prevUrl={prevUrl}
                  infoPoke={poke => setPokedex(poke)} 
                />
              }
            />
            <Route path='/Detail' element={<CardDetail pokedex={pokedex} />}/>
          </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
