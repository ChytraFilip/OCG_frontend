import { useEffect } from "react"
import { useSessionContext } from '../components/sessionContext';
import { type GameDto } from '../api/generated-sources/ocgClientFetch';
import '../components/init'

import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const Game = () => {
  const { session } = useSessionContext();
  console.log("sessionSocket: ",session?.socket)
  const socket = new SockJS('http://localhost:5173'+session?.socket);
  const stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame: string) {
      console.log('Connected: ' + frame);
        stompClient.subscribe(session?.subscribe, function (messages: string) {
          console.log("Mesage:", messages);
      })
    })
    
  return <>
     <div>
      <h1>Socket IO test via websocket</h1>
      <input type="text" placeholder="Enter you message.." />
      <button type="button" onClick={() => stompClient.send(session?.send, {}, JSON.stringify({state: "TEST"} as GameDto))}>Send message</button>
      <button type="button" onClick={() => stompClient.disconnect()}>Close</button>
    </div>
  </>
}

export default Game