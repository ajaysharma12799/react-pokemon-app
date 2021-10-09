import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import PokemonCard from './components/PokemonCard';
import "./App.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const API = "https://pokeapi.co/api/v2/pokemon";

  const fetchPokemons = async () => {
    const response = await axios.get(API);
    setPokemons(response.data.results);
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Fragment>
    <Navbar />
    <div className="container pokemon-container">
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