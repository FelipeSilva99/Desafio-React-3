import  React, { Component } from 'react';
import './App.css' 

class App extends Component{
  state = {
    nome: 'Felipe Silva',
    idade: 22,
    comidaF: 'Costela de porco grelhada',
    fruta: 'minha fruta favorita se chama Pera',
    musica: ['Froid - Flow de Lázaro', 'Filipe Ret - A.N.A.R.C.O.S', '6LACK - Prblms']
  }
  
  render() {
    return (
      <div>
      <h1>{this.state.nome}</h1>
      <h2>{this.state.idade}</h2>
      <h3>{this.state.comidaF}</h3>
      <ul className='List'>
      <li>{this.state.musica[0]}</li>
      <li>{this.state.musica[1]}</li>
      <li>{this.state.musica[2]}</li>
      </ul>
      <h4>{this.state.fruta}</h4>
      <img src="/img/Pera.png" alt="Imagem da fruta Pera"/>
    </div>
  )
}
}

export default App;
