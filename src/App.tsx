import {BrowserRouter, Routes, Route} from 'react-router-dom'

import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home'
import Game from './pages/Game'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import News from './pages/News'

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/game/:sessionId" element={<Game />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/news' element={<News />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App