import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';


function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;