/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [content, content_change] = useState([
    'PainKiller',
    'Neardy Love',
    'Click Me'
  ]);
  let [clicked, clicked_change] = useState(0);
  let [in_val, in_val_change] = useState('');

  function contentAdd() {
    // when handling list or object kind of state
    // make a copy and modify. then use state change function with that
    let new_content = [...content];
    // use spread operater to deep copy
    new_content.push(in_val);
    // new_content[0] = "Cereal";
    content_change(new_content);
  }

  // only one big div in return
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {
        content.map(function (con, i) {
          return (
            <div className="list">
              <h3 onClick={() => { clicked_change(i) }}>{con}</h3>
              <p>2월 17일 발행</p>
              <hr />
            </div>
          )
        })
      }

      <input type="text" onChange={(e) => { in_val_change(e.target.value); }} />
      <button onClick={contentAdd}>add</button>
      <hr />
      <h3>{ in_val }</h3>
      <hr/> 
    </div>
  );
}

function Modal( props ) {
  return (
    <div className="modal">
      <h3>{props.title[props.clicked]} </h3>
      <p>12월 1일 발행</p>
      <hr></hr>
    </div>
  )
}

export default App;
