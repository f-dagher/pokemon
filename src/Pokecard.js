import React, { Component } from "react";
import "./Pokecard.css";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component {
  render() {
    //let imgSrc = `${POKE_API}${this.props.id}.png`;
    //let padToTHree = (number) =>  (number <=999 ? `00${number}`.slice(-3) :number);
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <img src={imgSrc(this.props.id)} alt={this.props.name} />
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}

function imgSrc(id) {
  let url = POKE_API;

  if (id < 10) {
    url += "00";
    url += id;
    url += ".png";
    return url;
  } else if (id >= 10 && id < 100) {
    url += "0";
    url += id;
    url += ".png";
    return url;
  } else {
    url += id;
    url += ".png";
    return url;
  }
}

export default Pokecard;
