import { useEffect } from "react"
import { io } from 'socket.io-client';
import { useSessionContext } from '../components/sessionContext';
import { GameDto } from '../api/generated-sources/ocgClientFetch';

const Game = () => {
  const { session } = useSessionContext();
  const socket = io(session?.socket || '');
  
  // const [showConnection, setShowConnection] = useState(false);
  // const [showConnectButton, setShowConnectButton] = useState(true);
  // const [showDisconnectButton, setDisconnectButton] = useState(false);
  // const [message, setMessage] = useState('');

  console.log(session)
  console.log(session?.socket)
  console.log(session?.subscribe)
  console.log(socket?.send)

  // const setConnected = (connected: boolean) => {
  //   if(connected) {
  //     setShowConnection(true);
  //     // setShowConnectButton(false);
  //   } else {
  //     setDisconnectButton(true);
  //   }
  // };

  // const connect = () => {
  //   // Poslouchání události 'connect'
  //   socket.on('connect', () => {
  //     console.log('Connected to server');

  //     // Odeslání zprávy na '/send'
  //     socket.emit(session?.send || '', { message: 'Hello from client' });
  //   });

  //   // Poslouchání události 'message' na '/game-get/result'
  //   socket.on(session?.subscribe || '', (data) => {
  //     console.log('Received data from /game-get/result:', data);
  //     // Zde můžete aktualizovat stav vaší React komponenty nebo vyvolat jinou akci
  //   });
  // };

  // const disconnect = () => {
  //   console.log("Odpojuji..disconnect()")
  //   socket.disconnect();
  // };

  const sendMessage = () => {
    console.log("test")
    socket.emit(session?.send || '',  {state:"test"} as GameDto);
    console.log("Zpráva odeslána.")
  };

  useEffect(() => {
    socket.on(session?.subscribe || "", (data) => {
      console.log("Zpráva přijata.");
      console.log(data);
      alert(data.message);
    });

    return () => {
      socket.off(session?.subscribe || "");
    };
  }, [session?.subscribe, socket]);

  // useEffect( ()=> {
  //   console.log("Zahajuji připojování... connect()")
  //   // connect();

  //   return () => {
  //     // disconnect();
  //     // setConnected(false)
  //     // setShowConnection(false);
  //   };

  // }, [])

  return <>
     <div>
      <h1>Socket IO test via websocket</h1>
      <input type="text" placeholder="Enter you message.." />
      <button type="button" onClick={()=>sendMessage()}>Send message</button>
    </div>
  </>
}

export default Game