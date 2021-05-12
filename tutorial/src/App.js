
import './App.css';
import './Nav.css'
import Welcome from './components/Welcome.js'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Example from './components/hooks.js'
import Toggle from './components/eventhandling.js'

function App() {
  return (
    <div>
      <Navbar />

      <Welcome fname="Bryan" />
      <Welcome fname="Anny" />
      <Welcome fname="Lorenzo"/>
      <Example />
      <Toggle />
      <Footer />


    </div>
  );
}

export default App;
