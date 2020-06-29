import React from "react";
import Pokecard from "./Pokecard";
import Pokedex from "./Pokedex";
import Pokegame from "./Pokegame";
import "./App.css";

function App() {
  return (
    <div>
      <Pokegame />
    </div>
  );
}

//<Pokecard id={4} name="Charmander" type="Fire" exp={62} />
export default App;
