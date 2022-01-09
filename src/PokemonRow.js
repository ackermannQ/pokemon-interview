import React from 'react'

// interface PokemonRowProps {
//    pokemon: IPokemon;
// }

export default function PokemonRow(props) {
   
   return (
      <tbody>
         <tr>
            <td style={{textAlign: 'center', minWidth:'200px', border: '1px solid black'}}>{props.pokemon.id}</td>
            <td style={{textAlign: 'center', minWidth:'200px', border: '1px solid black'}}>{props.pokemon.name}</td>
            <td style={{textAlign: 'center', minWidth:'200px', border: '1px solid black'}}>{props.pokemon.types.map(type => <li key={props.pokemon.id}>{type}</li>)}</td>
            <td style={{textAlign: 'center', minWidth:'200px', border: '1px solid black'}}><img src={props.pokemon.sprite} alt={props.pokemon.name} /></td>
         </tr>
      </tbody>
   )
}
