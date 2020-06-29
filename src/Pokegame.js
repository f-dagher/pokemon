import React, { Component } from "react";
import Pokedex from "./Pokedex";
import pokemon from "./Pokemon";
import Pokecard from "./Pokecard";

class Pokegame extends Component {
  static defaultProps = { pokemon };
  render() {
    let poke = this.props.pokemon;
    let hl = Math.ceil(poke.length / 2);
    let team1 = poke.slice(0, hl);
    let team2 = poke.slice(hl, poke.length);

    return (
      <div className="Pokegame">
        <Pokedex
          title="Team 1"
          totalExp={totalExp(team1)}
          isWinner={isWinner(team1, team2)}
          pokemon={team1}
        />
        <Pokedex
          title="Team 2"
          totalExp={totalExp(team2)}
          pokemon={team2}
          isWinner={isWinner(team2, team1)}
        />
      </div>
    );
  }
}

function isWinner(team1, team2) {
  return totalExp(team1) > totalExp(team2);
}

function totalExp(team) {
  let expList = team.map((x) => x.base_experience);

  var exp = 0;
  var i;

  for (i = 0; i < expList.length; i++) {
    exp += expList[i];
  }

  return exp;
}

export default Pokegame;
