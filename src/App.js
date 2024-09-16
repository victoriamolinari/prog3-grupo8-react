import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Temporal, hasta que hagamos Link
import HomeGrid from './components/HomeGrid/HomeGrid';
import Search from './components/Search/Search';

function App() {
  return (
    <>
      <Header />
      
      <Search />
      <HomeGrid /> 
      {/* Para chequear que funcione pongo el componente HomeGrid acá, después lo ponemos con Link según la url */}

      <Footer />
    </>
  );
}

export default App;