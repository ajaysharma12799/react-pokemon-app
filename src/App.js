import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import PokemonCard from './components/PokemonCard';
import "./App.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  const API = pokemonName === "" ? 
  "https://pokeapi.co/api/v2/pokemon?limit=100" 
  : 
  `https://pokeapi.co/api/v2/pokemon/${pokemonName}` ;

  const fetchPokemons = async () => {
    const response = await axios.get(API);
    setPokemons(response.data.results);
  }

  const fetchSinglePokemon = async () => {
    const response = await axios.get(API);
    setPokemons(response.data.forms);
  }

  const handleChange = (e) => {
    e.preventDefault();
    fetchSinglePokemon();
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Fragment>
    <Navbar />
    <div className="container mb-3">
      <SearchBox 
        placeholder={"Search Pokemon"}
        handleChange={e => setPokemonName(e.target.value.toLowerCase())}
      />
      <button onClick={handleChange} className="btn btn-success w-100">Search</button>
    </div>
    <div className="pokemon-container">
      {
        pokemons.map((poke, index) => (
          <PokemonCard key={index} poke={poke} />
        ))
      }
    </div>
    <Footer />
    </Fragment>
  )
}

export default App