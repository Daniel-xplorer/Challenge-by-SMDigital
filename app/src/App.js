import { Routes, Route } from 'react-router-dom';
import Books from './routes/Books';
import Home from './routes/Home';
import Navbar from './routes/Navbar.jsx/Navbar';
import Users from './routes/Users';
import styles from './App.css';

function App() {
  return (
    <div >
      <Navbar />
        <div className='fit'>
          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/users' element={ <Users/> }/>
            <Route path='/books' element={ <Books/> }/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
