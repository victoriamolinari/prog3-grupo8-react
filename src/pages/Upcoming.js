import MoviesGrid from '../components/MoviesGrid/MoviesGrid';
import Filter from '../components/Filter/Filter';
import { Component } from 'react';
import { FaSearch } from "react-icons/fa";

class Upcoming extends Component {
  constructor(props) {
    super(props);
    this.state = {

      upcoming: [],
      upcomingUnfiltered: [],

      query: "",
      searchResults: [],

      page: 2,

      filterRating: false,
      filterDate: false,
    }
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=33e10f642f640258287c658cad162391')
      .then(response => response.json())
      .then(data => this.setState({
        upcoming: data.results,
        upcomingUnfiltered: data.results
      }))
      .catch(error => console.error('Error: ', error));
  }

  handleSearchChange(event) {
    const inputValue = event.target.value;
    this.setState({
      query: inputValue,
      upcoming:
        this.state.upcomingUnfiltered.filter(movie => movie.title.toLowerCase().includes(inputValue.toLowerCase()))
    });

  }

  handleCancelSubmit(event) {
    event.preventDefault()
  }

  handleLoadMore() {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?page=${this.state.page}&api_key=33e10f642f640258287c658cad162391`)
      .then(response => response.json())
      .then(data => this.setState({
        upcoming: this.state.upcoming.concat(data.results),
        upcomingUnfiltered: this.state.upcomingUnfiltered.concat(data.results),
        page: this.state.page + 1
      }))
      .catch(error => console.error('Error: ', error));
  }

  filterByRating = () => {
    if (this.state.filterRating === false) {
      const { upcoming } = this.state
      const filteredMovies = upcoming.filter(movie => movie.vote_average >= 7);
      this.setState({ upcoming: filteredMovies });
      this.handleFilterRating();
    } else {
      this.setState({ upcoming: this.state.upcomingUnfiltered })
      this.handleFilterRating();
    }
  }

  filterByDate = () => {
    if (this.state.filterDate === false) {
      const { upcoming } = this.state;
      const filteredMovies = upcoming.filter(movie => {
        const releaseYear = Number(movie.release_date.split("-")[0]);
        const releaseMonth = Number(movie.release_date.split("-")[1]);
        return releaseYear == 2024 && releaseMonth >= 7;
      });

      this.setState({ upcoming: filteredMovies });
      this.handleFilterDate();

    } else {
      this.setState({ upcoming: this.state.upcomingUnfiltered });
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

        <MoviesGrid sectionName="Upcoming" movies={this.state.upcoming} />

        <div className="flex-center">
          <button className="cargar-mas-button" onClick={() => this.handleLoadMore()}>Cargar más</button>
        </div>
      </>
    );
  }

}


export default Upcoming;
