import React from 'react';

import PokemonRow from './PokemonRow';

// interface PokemonTableProps {
//    pokemons: IPokemon[];
// }

export default function PokemonTable(props) {
   return (
      <div style={{display: 'center'}}>
      <table>
         <thead>
            <tr>
               <th style={{border: '1px solid black'}}>Id</th>
               <th style={{border: '1px solid black'}}>Name</th>
               <th style={{border: '1px solid black'}}>Types</th>
               <th style={{border: '1px solid black'}}>Sprite</th>
            </tr>
         </thead>
         {props.pokemons?.map(pokemon => <PokemonRow key={pokemon.id} pokemon={pokemon} />)}
         </table>
      </div>
   );
}
