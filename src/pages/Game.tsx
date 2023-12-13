import { useEffect, useState } from "react"
import { io } from 'socket.io-client';

const Game = () => {
  const socket = io('/stomp-endpoint');
  // const [socket, setSocket] = useState<Socket | null>(null);
  const [showConnection, setShowConnection] = useState(false);
  const [showConnectButton, setShowConnectButton] = useState(true);
  const [showDisconnectButton, setDisconnectButton] = useState(false);
  const [message, setMessage] = useState('');

  const setConnected = (connected: boolean) => {
    if(connected) {
      setShowConnection(true);
      setShowConnectButton(false);
    } else {
      setDisconnectButton(true);
    }
  };

  const connect = () => {
    socket.on('connect', () => {
      setConnected(true);
      console.log('Připojeno...');

      // Odeslání subscribe zprávy na server
      socket.emit('subscribe', '/topic/messages');

      // Naslouchání na události 'messages' na kanálu '/topic/messages'
      socket.on('messages', (receivedMessages) => {
        setMessage(JSON.parse(receivedMessages));
      });

    });
  };

  const disconnect = () => {
    console.log("Odpojuji..")
    socket.disconnect();
  };

  const sendTxt = () => {
    console.log("Odesílám zprávu...")
    socket.emit('send', '/app/hello', { txt: "Your message" });
  };

  useEffect( ()=> {
    console.log("Zahajuji připojování...")
    connect();

    return () => {
      disconnect();
      setConnected(false)
      setShowConnection(false);
    };

  }, [])

  return <>
     <div>
      <h1>Socket IO test via websocket</h1>
      <p>State of conenection: {showConnection ? 'Connected' : 'Non connected'}</p>
      {showConnectButton && <button onClick={()=>connect}>Connect</button>}
      {showDisconnectButton && <button onClick={()=>disconnect}>Disconnect</button>}
      <br />
      {<p>{message}</p>}
      <button onClick={sendTxt}>Send message</button>
    </div>
  </>
}

export default Game