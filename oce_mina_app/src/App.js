import React from 'react';
import './App.css';
import {Button} from "react-bootstrap"
import { Link } from "react-router-dom";


const nombreDeVies = 8;
const barreVieInitial = 10;


class App extends React.Component {

  get etatInitial() {
    return {
      // On crée un array avec toutes les lettres disponibles
      lettresDisponibles: [..."abcdefghijklmnopqrstuvwxyz"],
      lettresEssayees: new Set(),
      tousLesMots: 
      [
        'informatique', 
        'programmation', 
        'clavier', 
        'ordinateur', 
        'chargeur', 
        'souris', 
        'onglet', 
        'intelligent', 
        'patient', 
        'innovant', 
        'recherche', 
        'calme', 
        'intriguant'
      ],
      mot: "",
      etatPartie: 0, 
      barreVie: barreVieInitial,
    };
  }

  constructor() {
    super();
    this.state = this.etatInitial;
    this.state.mot = this.state.tousLesMots[Math.floor(Math.random()*this.state.tousLesMots.length)]
    this.handleClick = this.handleClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  handleClick(event) {
    let lettreAppuyee = event.target.firstChild.data;
    let toReturn = {}

   
    if (this.computeDisplay(this.state.mot, this.state.lettresEssayees.add(lettreAppuyee)) === this.state.mot) {
      toReturn.etatPartie = 1;
    }

    this.setState((prevState) => {
   
      if (!prevState.mot.includes(lettreAppuyee)) {
        toReturn.barreVie = prevState.barreVie - (barreVieInitial / nombreDeVies);

        if (toReturn.barreVie <= 0) {
          console.log('Perdu')
          toReturn.etatPartie = 2;
        }
      }
      

      return {
        lettresEssayees: prevState.lettresEssayees.add(lettreAppuyee),
        ...toReturn
        
      }
    })
  }

  resetGame(event) {
    this.setState(prevState => {
      let nouvelEtat = this.etatInitial
      nouvelEtat.mot = prevState.tousLesMots[Math.floor(Math.random()*prevState.tousLesMots.length)];
      return nouvelEtat
    }
      );

  }

  computeDisplay(phrase, usedLetters) {
    return phrase.replace(/\w/g,
      (letter) => (usedLetters.has(letter) ? letter : '_')
    )
  }

  render() {
 
    let lettres = this.state.lettresDisponibles.map(x => (
      <div key={x}
        className={this.state.lettresEssayees.has(x) ? "lettre lettre-utilisee" : "lettre lettre-inutilisee"}
        onClick={!this.state.lettresEssayees.has(x) ? this.handleClick : null}>
        {x}
      </div>));
    
      

    let boutonRejouer = ['R','e','j','o','u','e','r','?'].map((x,index) => (
      <div key={index}
        className="lettre lettre-rejouer"
        onClick={this.resetGame}>
        {x}
      </div>));


    let motAffiche = this.computeDisplay(this.state.mot, this.state.lettresEssayees)

    let style = {}
    let text = {}

    switch(this.state.etatPartie) {
      case 1:
        style.mot = {color: "#A9D962"};
        text.message = "Félicitations! Vous avez gagné !";
        break;
      case 2:
        style.mot = {color: "#BDED77"};
        text.message = "Vous avez perdu.";
        text.mot = `Le mot cherché était « ${this.state.mot} ».`;
        break;
      default:
        break;
    }



    return (
      <div className="App">
        <h1>Le jeu du pendu</h1>
        <p className="header-description">Trouvez le mot !</p>
        <div className="mot">
          <p style={style.mot}>{motAffiche}</p>
        </div>
        {this.state.etatPartie ? <div><h3>{text.message}</h3><p>{text.mot}</p></div> : ""}
        <div className="clavier">
          {this.state.etatPartie ? boutonRejouer : lettres}
        </div>

        <br />
     
       <Button as= {Link} to ="/WordPage/:id">Suppimer des mots</Button>
      </div>
    );
  }
}

export default App;
