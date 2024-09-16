import { Component } from 'react';

class Search extends Component {

    constructor() {
        super();
        this.state = {
            inputSearch: "",
            resultadosSearch: []
        }
    }

    handleSearchChange(event) {
        this.setState({ inputSearch: event.target.value });
    }


    handleSearchSubmit(event) {
        event.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.inputSearch}&api_key=33e10f642f640258287c658cad162391`)
        .then(response => response.json())
        .then(data => {
            this.setState({ resultadosSearch: data.results })
            // console.log(this.state.resultadosSearch);
        })
        .catch(error => console.error('Error: ', error));
    }


    render() {
        return (
            <>
                <h3 className="h3-section">Buscador de Peliculas</h3>
                <form onSubmit={(event) => this.handleSearchSubmit(event)}>
                    <input onChange={(event) => this.handleSearchChange(event)}
                        type="text"
                        value={this.state.inputSearch}
                        placeholder="Buscar películas..."
                    />
                    <button type="submit" className="">Enviar</button>
                </form>
                
            </>
        )
    }
}

export default Search;