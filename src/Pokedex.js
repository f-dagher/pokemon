import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    console.log(this.props.isWinner);
    return (
      <div className="Pokedex">
        <h1 className="Pokedex-title">
          {this.props.title}: {this.props.totalExp}
        </h1>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
        <h2 className="Pokedex-winner">
          {this.props.isWinner ? "THIS HAND WINS!" : ""}
        </h2>
      </div>
    );
  }
}

export default Pokedex;
