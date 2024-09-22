import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Populares from './pages/Populares';
import Upcoming from './pages/Upcoming';
import NotFound from './pages/NotFound';
import ResultadoDeBusqueda from './pages/ResultadosDeBusqueda';
import Detalle from './pages/Detalle';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/populares" component={Populares} />
        <Route path="/upcoming" component={Upcoming} />
        <Route path="/detalle/id/:id" component={Detalle} />
        <Route path="/search" component={ResultadoDeBusqueda} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;