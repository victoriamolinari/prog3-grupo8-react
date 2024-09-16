import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Temporal, hasta que hagamos Link
import HomeGrid from './components/HomeGrid/HomeGrid';
import Search from './components/Search/Search';

import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Populares from './pages/Populares';
import Upcoming from './pages/Upcoming';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/populares" component={Populares} />
        <Route path="/upcoming" component={Upcoming} />
      </Switch>
      
      
      <Search />
      <HomeGrid /> 
      {/* Para chequear que funcione pongo el componente HomeGrid acá, después lo ponemos con Link según la url */}

      <Footer />
    </>
  );
}

export default App;