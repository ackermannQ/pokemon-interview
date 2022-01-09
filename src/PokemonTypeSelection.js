import React from 'react'

// import 'IPokemon' from './App'
// type PokemonTypeSelectionProps {
//    selectedType: string | undefined;
//    selectType: (type: string | undefined) => void
// pokemons:IPokemon[];
// }

export default function PokemonTypeSelection({selectedType, selectType, pokemons}) {
   
   return (
      <>
         <span style={{fontSize: '20px', marginBottom: '10px'}}>Pokemon type selected:</span> <StyledType />
         <AllChoices pokemons={pokemons.pokemons} selectType={selectType} />
      </>
   )

   function StyledType() {

      return <span style={{marginLeft: '10px', fontSize: '25px', textTransform: 'uppercase'}}>{selectedType ?? 'None'}</span>
   }

   function AllChoices() {
      
      return pokemons &&
      <div>
         <select style={{width: '100px'}} value={selectedType ?? "Chose"} onChange={(e) => selectType(e.target.value)}>
           <option value="Chose" disabled hidden>Type</option>
            {pokemons.pokemons.filter((item, pos) => pokemons.pokemons.indexOf(item) === pos).map(pokemon => <option key={pokemon.id} value={pokemon.type}>{pokemon.types}</option>)}
         </select>
         <button style={{marginLeft: '10px'}} onClick={(() => selectType(null))}>Reset</button>
      </div>
   }
}
