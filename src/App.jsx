import { useState } from 'react'
import NavBar from './assets/components/NavBar'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Subjects from './assets/pages/Subjects'
import Activities from './assets/pages/Activities'
import { Routes, Route } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/ici-web' element={<Home />}/>
        <Route path='/ici-web/about' element={<About />}/>
        <Route path='/ici-web/subjects' element={<Subjects />}/>
        <Route path='/ici-web/activities' element={<Activities />}/>
      </Routes>
    </>
  )
}

export default App
