import logo from './logo.svg';
import './App.css';
// import MainPage from './master/MainPage';
// import MainPage from './master/MainPage';
import Vaishnavi from './master/Vaishnavi';
// import { Route } from 'react-router-dom';
// import { Routes } from 'react-router';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Router } from 'react-router-dom';


function App() {
  return (
    <div>
      {/* <Router> */}
      <Routes>
        {/* <Route exact path="/" element={<MainPage />} /> */}
        <Route exact path="/" element={<Vaishnavi />} />

        
      </Routes>
      {/* </Router> */}
      {/* <h1>hello</h1> */}
     
    </div>
  );
}

export default App;
