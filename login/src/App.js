import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Experience from './component/Experience';
import Contact from './component/Contact'

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/navbar' element={<NavBar />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='/contact' element={<Contact />}></Route>



        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
