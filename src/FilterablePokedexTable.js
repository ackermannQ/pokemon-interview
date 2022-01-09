import React from 'react'

import PokemonTable from './PokemonTable';
import PokemonTypeSelection from './PokemonTypeSelection'

export default function FilterablePokedexTable(props) {
   const [selectType, setSelectType] = React.useState(null);

   return (
      <div style={{marginLeft: '10px'}}>
         <PokemonTypeSelection
            selectedType={selectType}
            selectType={setSelectType}
            pokemons={props}
         />
         <div style={{display: 'flex', marginTop: '50px'}}>
            <PokemonTable
               pokemons={selectType ? props.pokemons.filter(pokemon => pokemon.types.includes(selectType)) : props.pokemons}
            />
            <div style={{marginLeft: '300px', display: 'center', maxWidth: '500px'}}>
               Select a type to show all the Pokemons with it!
            </div>
         </div>
      </div>
   )
}
