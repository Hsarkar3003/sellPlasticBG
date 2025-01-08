

import './App.css'
import Home from './routes/HomePage/Home'
import { BrowserRouter,Routes,Route}from 'react-router-dom'
import Register from './routes/register/Register'
import Login from './routes/Login/Login'
import Shope from './routes/shop/Shope'
import Aboutus from './routes/aboutUS/Aboutus'
import Contect from './routes/contectUS/Contect'


function App() {


  return (
    <>
     <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/register" element={  <Register/>}> </Route>
      <Route path="/login" element={  <Login/>}> </Route>
      <Route path="/product" element={  <Shope/>}> </Route>
      <Route path="/aboutUs" element={  <Aboutus/>}> </Route>
      <Route path="/conTechUs" element={  <Contect/>}> </Route>
    
    </Routes>

</BrowserRouter>
    </>
  )
}

export default App
