import React from 'react'

const PokemonCard = ({poke}) => {
    const { name } = poke;

    return (
        <div className="card">
            <img className="card-img-top" src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} alt={name} />
            <div className="card-body text-center">
                <h5 className="card-title">{name.toUpperCase()}</h5>
            </div>
        </div>
    )
}

export default PokemonCard
