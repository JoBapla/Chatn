import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import "./index.css";

function Header(){
  return(
    <h1 id="title">ToolKit</h1>
  );
}
function Input(){
  return(
    <button>Start</button>
  )
}

function App(){
  return(
    <>
    <Header/>,
    <Input/>,
    </>
  );
}


ReactDOM.render(
  <App/>,
  document.getElementById("root")
)