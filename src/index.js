import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import SocketIOClient from "socket.io-client"
import "./index.css";
import "./grid.css";



const ENDPOINT = "http://127.0.0.1:4000";
const socket = SocketIOClient(ENDPOINT);


function Video(){
    let [url,setURL]=useState("")
    
    let [chat, setChat]=useState([])
    
    useEffect(() => {
      socket.on("chat", data => {
      
        setChat([data, ...chat])
        console.log(chat)
        
        if(data.includes("https://www.youtube.com/watch?v=")){
          var split=data.split("=");
          var url="https://www.youtube.com/embed/"+split[1]+"?autoplay=1"
          setURL(url)
        }
      });
    },[chat]);

    let [message, changeMessage]= useState("")

    function updateInput(event){
      changeMessage(event.target.value)
    }
  
    

    function sendKey(event){
      if(event.key==='Enter'){
        
        socket.emit("chat", {
          message: message
        });
        
      }
    }

    function sendButton(event){
      socket.emit("chat", {
        message: message
      });
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
            <iframe id="video-player" title="youtube" src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      
      </div>
      <div className="chat-section">
            
            <div id="chat-container">
                <div id="chat">
                  
                  {chat.map(chatMessage=>{return <p>{chatMessage}</p>})}
               
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
    <Video/>,
    </>
  );
}


ReactDOM.render(
  <App/>,
  document.getElementById("root")
)