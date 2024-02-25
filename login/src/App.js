import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Home from "./Home";
import About from './About';
import Education from './Education';


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' component={<About />}></Route>
          <Route path='/education' component={<Education />}></Route>


        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
