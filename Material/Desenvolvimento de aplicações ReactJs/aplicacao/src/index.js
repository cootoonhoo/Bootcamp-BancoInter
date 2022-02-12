import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TodoListStatefull from './listStateFull.jsx';

function Seninha(){
  return(
      <TodoListStatefull />
  )
}
function App(){
  return(
    <div>
      Oi
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Seninha/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
