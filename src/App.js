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
  let [like, like_change] = useState(0);
  
  function titleChange() {
    // when handling list or object kind of state
    // make a copy and modify. then use state change function with that
    let new_content = [...content];
    // use spread operater to deep copy
    // new_content.sort();
    new_content[0] = "Cereal";
    content_change(new_content);
  }

  // only one big div in return
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ titleChange }> change content 1 </button>
      
      <div className="list">
        <h3>{content[0]} <span onClick={() => { like_change(like+1); }}>👍</span> {like} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{content[1]}</h3>
        <p>2월 21일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{content[2]}</h3>
        <p>2월 11일 발행</p>
        <hr />
      </div>

      <Modal></Modal>
      
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
        <h2>제목</h2>
        <p>날씨</p>
        <p>상세내용</p> 
      </div>
  )
}

export default App;
