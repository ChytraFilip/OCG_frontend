import {BrowserRouter, Routes, Route} from 'react-router-dom'

import SharedLayout from './pages/SharedLayout'
import Home from './pages/home'
import Game from './pages/Game'

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App