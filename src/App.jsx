import  {Home, Clases, Bio, Info, Contacto}  from './pages'
import {NavBar, Footer} from './components'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/style.css'
 
function App() {
 
  return (
    <div className="App">
        <BrowserRouter>
      <NavBar/> 
      <Routes>
          < Route path = '/' element= {<Home/>} />
          < Route path ='/clases' element={<Clases/>} />
          < Route path = '/bio' element= {<Bio/>}/>
          < Route path= '/info' element={<Info/>}/>
          < Route path='/contacto' element={<Contacto/>}/> 
          < Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
