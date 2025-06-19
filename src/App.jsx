import './App.css'
import Avatar from './components/Avatar';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Online from './components/Online';
import Specialties from './components/Specialties';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Importa el Footer

function App() {
  return (
    <>
      <Header />
      <Avatar />
      <Presentation />
      <Online />
      <Specialties />
      <Contact />
      <Footer /> {/* Agrega el Footer aquí */}
    </>
  )
}

export default App
