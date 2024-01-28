import logo from './logo.svg';
import './App.css';
import { Login } from './Forme/Login/Login';
import {Routes , Route , Link } from 'react-router-dom';
import Accueil from './Forme/Accueil/Accueil';

function App() {
  return (
    <>
		
	  <Routes>
		    <Route path="/" element={<Login/>}/>
        <Route path="/Accueil" element={<Accueil/>}/>
	  </Routes>
		</>
  );
}

export default App;
