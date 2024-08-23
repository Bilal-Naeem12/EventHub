
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Footer from './component/Footer'
import { Routes, Route, Router } from 'react-router-dom'

function App() {
 
  return (
    <> 
       <Navbar/>
    <Routes>

   <Route path={"/"}  element={ <Home/>}></Route>
   

 
    </Routes>
    <Footer/>

    </>
  )
}

export default App
