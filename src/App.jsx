import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokedex from './components/Pokedex/pokedex'
import Search from './components/Search/Search'
import PokemonList from './components/PokemonList/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pokedex/>
      <PokemonList/>
      </>
  )
}

export default App;
