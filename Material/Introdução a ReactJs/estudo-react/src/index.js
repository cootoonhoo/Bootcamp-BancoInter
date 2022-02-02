import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Button from './Button';

class App extends Component{

    constructor(props){
      super(props)
      this.state = {
        clock: 1000,
        copo: "agua"
      }
    }

    alterarCopo = () =>{
        this.setState({
          copo: "Refral"
        })
      }

  render (){
    const {clock, copo} = this.state
    return(
      <div>
        <button onClick={()=>alert(clock)}>
          {copo}
        </button>
        <p>        <button onClick={this.alterarCopo}>
          Mudar conteúdo
        </button></p>
      </div>
    )
  }
}

const som = (a,b) =>{
  alert(a + b);
}

/*
function primeiroJSX(){
  return(
    <div className="teste">
          Marco Batista - Intro React
        <Button onClick={()=> som(10,3)} name ="Marco"/>
    </div>
  )
} */



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
