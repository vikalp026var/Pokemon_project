import { useEffect, useState } from "react"
import axios from 'axios'
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon"

function PokemonList(){
     const [pokemonlist,setPokemonlist]=useState([]);
     const [isLoading ,setIsloading]=useState(true)
  async function downloadPokemons(){
     const response=await axios.get('https://pokeapi.co/api/v2/pokemon')
     const pokemonResults=response.data.results;
     console.log(response.data);
     const pokemonPromise=pokemonResults.map((pokemon)=>axios.get(pokemon.url));
     const PokemonData=await axios.all(pokemonPromise)
     const res=PokemonData.map((pokeData) => {
        const pokemon=pokeData.data;
        return {
       id :pokemon.id,
       name:pokemon.name,
       image :(pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
       types:pokemon.types
      }
     });
     console.log(res);
     setPokemonlist(res)
     console.log(PokemonData);
     setIsloading(false)
  }

useEffect(()=>{
  downloadPokemons();
},[])
return (
     <div className="pokemon-list-wrapper">
    <div>Pokemon List </div>
    {(isLoading)?'Loading....':
     pokemonlist.map((p)=><Pokemon name={p.name} image={p.image} key={p.id}/>)
    }
     </div>
     
    ) 
}
export default PokemonList