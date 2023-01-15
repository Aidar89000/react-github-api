import './App.scss'
import Home from './pages/Home/Home'
import Info from './pages/Info/Info'
import Layout from './components/Layout/Layout'
import {Route, Routes} from 'react-router-dom'
import Profile from './pages/Profile/Profile'

function App() {

  
  return (
    <div className="container pt-4">

      <Routes>

        <Route element={<Layout/>} path='/'>

          <Route path='Home' element={<Home/>}/>
          <Route path='Info' element={<Info/>}/>
          <Route path='Profile/:userName' element={<Profile/>}/>

        </Route>

      </Routes>
  
    </div>
  )
}

export default App
