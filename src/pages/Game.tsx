import { useEffect } from "react"
import { useSessionContext } from '../components/sessionContext';
// import { GameDto } from '../api/generated-sources/ocgClientFetch';
import '../components/init'

import SockJS from 'sockjs-client';

const Game = () => {
  const { session } = useSessionContext();
  const socket = new SockJS(session?.socket ||'');
  console.log(session?.socket)

  const sendMessage = () => {
    const message = 'Hello, server!';
    const targetURL = '/send';

    socket.send(JSON.stringify({
      targetURL: targetURL,
      message: message
    }));
  };

  useEffect( ()=> {
    if(session?.socket) {
      socket.addEventListener('open', (event) => {
        console.log('WebSocket connection opened:', event);
      });
      
      socket.addEventListener('message', (event) => {
        console.log('Received message:', event.data);
      });
      
      socket.addEventListener('close', (event) => {
        console.log('WebSocket connection closed:', event);
      });

      return () => {
        socket.close();
      };
    }
  },[session?.socket])

  return <>
     <div>
      <h1>Socket IO test via websocket</h1>
      <input type="text" placeholder="Enter you message.." />
      <button type="button" onClick={()=>sendMessage()}>Send message</button>
    </div>
  </>
}

export default Game