/* eslint-disable no-unused-vars */
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Schedules from './pages/Schedules';
import background from "./assets/Pattern3.png";
import Header from './components/Header'

function App() {
  return (
    <div className="App" style={{
      // backgroundImage: `url(${background})` ,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      }}>

   <Router>
    <Routes>
      <Route exact path="/" element={
        <>
         <Header/>
      <Home/>
      </>
      }/>
      <Route path="/schedule" element={<Schedules/>}/>
    </Routes>
   </Router>
   </div>
  );
}

export default App;
