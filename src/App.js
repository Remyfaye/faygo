import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './routes/Home';
import { Route , Routes} from "react-router-dom"
import Services from './routes/Services';
import Contact from './routes/Contact';
import About from './routes/About';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

      <Footer/>
      
      
    </div>
  );
}

export default App;
