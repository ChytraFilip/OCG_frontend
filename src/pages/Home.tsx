import { useState } from 'react'
import backgroundImage from '../assets/hero-img.jpg'
import RedirectButton from '../components/RedirectButton'

const Home = () => {
  const [openSessionBar, setOpenSessionBar] = useState(false)
  const [sessionId, setSessionId] = useState<number>(1)

  /***
   * Function to get session id
   **/
  const getSessionId = () => {
    setOpenSessionBar(true)

    //get session id from lubo be...
  }




  return (
    <section className="flex items-center justify-center h-screen text-white" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', fontFamily: 'Libre Baskerville, serif' }}>
      <div className="bg-gray-900 p-8 rounded-lg shadow-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to the new game</h1>
        <button 
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 w-full"
          type="button"
          onClick={() => getSessionId()}>Start game
        </button>
        {openSessionBar &&
          <div className="flex flex-col">
            <h2 className=''>Share this link to your friend:</h2>
            <a  className=''
                href={`http://localhost:5173/game/${sessionId}`}>http://localhost:5173/game/{sessionId}
            </a>
            <RedirectButton sessionId={sessionId} labelButton="OK"/>
          </div>
        }
      </div>
    </section>
  )
}

export default Home;
