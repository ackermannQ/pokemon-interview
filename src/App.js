import React from 'react';

import FilterablePokedexTable from './FilterablePokedexTable';
import Footer from './Footer';
import Header from './Header';

// export interface IPokemon {
//   id: number;
//   name: string;
//   types: Array<string>;
//   sprite: string;
// }

const pokemonArray = [
{
  id: 1,
  name: "Bulbasaur",
  types: ["Grass"],
  sprite: "https://pokemon.com/pictures/bulbasaur.png",
},
{
  id: 2,
  name: "Ivysaur",
  types: ["Grass"],
  sprite: "https://pokemon.com/pictures/ivysaur.png",
},
{
  id: 555,
  name: "Splout",
  types: ["Rabbit"],
  sprite: "https://pokemon.com/pictures/splout.png",
},
{
  id: 556,
  name: "Sloup",
  types: ["Mouse"],
  sprite: "https://pokemon.com/pictures/sloup.png",
},
];

export default function App() {

  return (
    <>
      <Header />
      <FilterablePokedexTable
        pokemons={pokemonArray}
      />
      <Footer />
    </>
  );
}
