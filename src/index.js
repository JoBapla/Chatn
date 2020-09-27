import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import SocketIOClient from "socket.io-client"
import "./index.css";
import "./grid.css";
import "./chat.js"


const ENDPOINT = "http://127.0.0.1:4000";
const socket = SocketIOClient(ENDPOINT);

function Video(){
    

    let [message, changeMessage]= useState("")

    function updateInput(event){
      changeMessage(event.target.value)
    }
  
    

    function sendKey(event){
      if(event.key==='Enter'){
        console.log(message)
        socket.emit("chat", {
          message: message
        });
        // socket.on("chat", function(data){
        //   console.log(data.message)
        // })
      }
    }

    function sendButton(event){
     console.log(message)
    }    
   
  
  
  
  return(
    <div className="grid two-column">
      <div id="video">
        
        <div className="grid four-column">
            <button id="null">action</button>
            <button id="null">action</button>
            <button id="null">action</button>
            <button id="null">action</button>
        </div>
        
        <div id="iframe-container">          
            <iframe id="video-player" src="" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      
      </div>
      <div className="chat-section">
            
            <div id="chat-container">
                <div id="chat">
               
                </div>   
            
            </div>
           
            <div id="message-area-container">
                <div id="message-area">
                    
                    <input id="message" type="text" placeholder="message" onChange={updateInput} onKeyPress={sendKey}/>
                    <button onClick={sendButton} id="send">send</button>
                    {/* <input id="name" type="text" placeholder="Name" /> */}
                </div>
            </div>

        </div>  
    
    
    </div> 

  );
}

function App(){
  return(
    <>
    <Video/>
    </>
  );
}


ReactDOM.render(
  <App/>,
  document.getElementById("root")
)