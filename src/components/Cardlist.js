import React from "react";  
import Card from './Card';

const Cardlist = ({ pokemons }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Poke 
                            key={i} 
                            id={pokemons[i].id} 
                            name={pokemons[i].name} 
                            abilities={pokemons[i].abilities}
                            />
                    );
                })
            }
        </div>
    );
}

export default Cardlist;