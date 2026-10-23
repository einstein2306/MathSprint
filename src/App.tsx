import { NavLink, Route, Routes } from 'react-router-dom'
import Addition from './components/Addition'
import Multiplication from './components/Multi'
import Subtraction from './components/Subtraction'
import './App.css'

 function App() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="#" >MathSprint</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className={({isActive})=> isActive ? "nav-link nav-active" : "nav-link"} aria-current="page" to="/">
                    Addition
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({isActive})=> isActive ? "nav-link nav-active" : "nav-link"}  to="/subtraction">
                    Subtraction
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({isActive})=> isActive ? "nav-link nav-active" : "nav-link"} to="/multiplication">
                    Multiplication
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <Routes>
            <Route path='/' element={<Addition/>}></Route>
            <Route path='/subtraction' element={<Subtraction/>}></Route>
            <Route path='/multiplication' element={<Multiplication/>}></Route>
          </Routes>
    
        </div>
      </div>

    </>
  )
}

export default App
