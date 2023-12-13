import { useState } from 'react'
import backgroundImage from '../assets/hero-img.jpg'
import RedirectButton from '../components/RedirectButton'
import { SessionDto, signUser, connect } from '../api/generated-sources/ocgClientFetch'

const Home = () => {
  const [openSessionBar, setOpenSessionBar] = useState(false)
  const [openStartBar, setOpenStartBar] = useState(true)
  const [userName, setUserName] = useState('')
  const [session, setSession] = useState<SessionDto>({})
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isButtonDisabledClass, setIsButtonDisabledClass] = useState('bg-gray-300 text-white px-4 py-2 rounded w-full');

  const getSessionId = () => {
    console.log(userName)
    signUser(userName)
    .then((user) => connect(user?.id || 1))
    .then((sessiondto) => setSession(sessiondto))
    setOpenSessionBar(true)
  }

  return (
    <section className="flex items-center justify-center h-screen text-white" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', fontFamily: 'Libre Baskerville, serif' }}>
      <div className="bg-gray-900 p-8 rounded-lg shadow-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to the new game</h1>
        {openStartBar && 
          <>
          <input 
            className='text-black bg-white'
            type="text" 
            placeholder='Enter your name.'
            onChange={(e)=> {
              if(e.target.value !== '') {
                setIsButtonDisabled(false)
                setIsButtonDisabledClass('bg-purple-800 text-white px-4 py-2 rounded w-full');
              }
              setUserName(e.target.value || '')
            }}
            value={userName}
          />
          <button 
            className={isButtonDisabledClass}
            type="button"
            disabled={isButtonDisabled}
            onClick={() => {
              if (!isButtonDisabled) {
                getSessionId()
                setOpenStartBar(false)
              }
            }}>Start game
          </button>
          </>
        }
        {openSessionBar &&
          <div className="flex flex-col">
            <h2 className=''>Share this link to your friend:</h2>
            <a  className=''
                href={`http://localhost:5173/game/${session.route}`}>http://localhost:5173/game/{session.route}
            </a>
            <RedirectButton sessionId={session.route || ''} labelButton="OK"/>
          </div>
        }
      </div>
    </section>
  )
}

export default Home;
