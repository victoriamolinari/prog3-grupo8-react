import MoviesGrid from '../components/MoviesGrid/MoviesGrid';
import Filter from '../components/Filter/Filter';
import { Component } from 'react';
import { FaSearch } from "react-icons/fa";

class Populares extends Component {
  constructor(props) {
    super(props);
    this.state = {

      // Arrays con películas
      popular: [],
      popularUnfiltered: [],

      // Filtro de búsqueda
      query: "",
      searchResults: [],

      // Cargar más
      page: 2,

      // Filtros viejos con botones
      filterRating: false,
      filterDate: false,
    }
  }

  // Fetch de la API
  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?page=1&api_key=33e10f642f640258287c658cad162391`)
      .then(response => response.json())
      .then(data => this.setState({
        popular: data.results,
        popularUnfiltered: data.results
      }))
      .catch(error => console.error('Error: ', error));
  }

  // Form del FILTER
  handleSearchChange(event) {
    const inputValue = event.target.value;
    this.setState({
      query: inputValue,
      popular:
        this.state.popularUnfiltered.filter(movie => movie.title.toLowerCase().includes(inputValue.toLowerCase()))
    });

  }

  handleCancelSubmit(event) {
    event.preventDefault()
  }

  // Cargar más películas
  handleLoadMore() {
    fetch(`https://api.themoviedb.org/3/movie/popular?page=${this.state.page}&api_key=33e10f642f640258287c658cad162391`)
      .then(response => response.json())
      .then(data => this.setState({
        popular: this.state.popular.concat(data.results),
        popularUnfiltered: this.state.popularUnfiltered.concat(data.results),
        page: this.state.page + 1
      }))
      .catch(error => console.error('Error: ', error));
  }

  // Filtros viejos por botón
  filterByRating = () => {
    if (this.state.filterRating === false) {
      const { popular } = this.state
      const filteredMovies = popular.filter(movie => movie.vote_average >= 7);
      this.setState({ popular: filteredMovies });
      this.handleFilterRating();
    } else {
      this.setState({ popular: this.state.popularUnfiltered })
      this.handleFilterRating();
    }
  }

  filterByDate = () => {
    if (this.state.filterDate === false) {
      const { popular } = this.state;
      const filteredMovies = popular.filter(movie => {
        const releaseYear = Number(movie.release_date.split("-")[0]);
        const releaseMonth = Number(movie.release_date.split("-")[1]);
        return releaseYear == 2024 && releaseMonth >= 7;
      });

      this.setState({ popular: filteredMovies });
      this.handleFilterDate();

    } else {
      this.setState({ popular: this.state.popularUnfiltered });
      this.handleFilterDate();
    }
  }

  handleFilterRating() {
    this.setState({ filterRating: !this.state.filterRating });
  }

  handleFilterDate() {
    this.setState({ filterDate: !this.state.filterDate });
  }

  render() {
    return (
      <>
        <Filter filterByRating={this.filterByRating} filterByDate={this.filterByDate} filterRating={this.state.filterRating} filterDate={this.state.filterDate} />

        <form onSubmit={(event) => this.handleSearchSubmit(event)}>
          <input
            onChange={(event) => this.handleSearchChange(event)}
            name="query"
            value={this.state.query}
            placeholder="Buscar películas..."
          />
          <button onClick={() => this.handleSearchSubmit}><FaSearch /></button>
        </form>

        <MoviesGrid sectionName="Populares" movies={this.state.popular} />

        <div className="flex-center">
          <button className="cargar-mas-button" onClick={() => this.handleLoadMore()}>Cargar más</button>
        </div>
      </>
    );
  }

}


export default Populares;
