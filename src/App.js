import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Theman from './components/Theman';
import Theskills from './components/Theskills';
import Theworks from './components/Theworks';
import Contact from './components/Contact';

function App() {
  return (
    <div className='bg-[#0a192f]'>
      <Navbar />
      <Home />
      <Theman />
      <Theskills />
      <Theworks />
      <Contact />
    </div>
  );
}

export default App;
