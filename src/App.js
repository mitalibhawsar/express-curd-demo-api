import './App.css';
import { BrowserRouter as Router,
  Routes,
  Route, 
  } from 'react-router-dom';
import Header from './components/heading/Header';
import About from './components/About/About';
import Scard from './components/SpecialCourse/Scard';
import Home from './components/Home/Home';
import OurStudent from './components/StudentsCards/OurStudent';
function App() {
  return (
    <div className="App">
     <Router>
     <Header/>
       <Routes>
       <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/studyMaterial' element={<Scard/>}/>
           <Route path='/team' element={<OurStudent/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
