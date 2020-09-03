import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import "./index.css";

function Header(){
  return(
    <>
    <h1 id="title">ToolKit</h1>
    <p id="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Mauris porta ex eget feugiat efficitur. Nulla non libero dolor.</p>
    </>
  );
}
function Input(){
  return(
    <div id="buttonWrapper">
    <button id="beginButton">Rate Your Day</button>
    </div>
  );
}

function App(){
  return(
    <>
    <Header/>
    <Input/>
    </>
  );
}


ReactDOM.render(
  <App/>,
  document.getElementById("root")
)