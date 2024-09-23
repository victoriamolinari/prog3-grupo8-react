import './styles.css';
import { Component } from 'react';
import { FaSearch } from "react-icons/fa";

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: "",
        }
    }

    handleSearchChange(event) {
        this.setState({
            query: event.target.value
        });
    }

    handleCancelSubmit(event) {
        event.preventDefault()
    }

    handleSearchSubmit() {
        this.props.history.push('/search', { query: this.state.query })
    }

    render() {
        return (
            <>
                <form onSubmit={(event) => this.handleSearchSubmit(event)}>
                    <input
                        onChange={(event) => this.handleSearchChange(event)}
                        name="query"
                        value={this.state.query}
                        placeholder="Buscar películas..."
                    />
                    <button onClick={() => this.handleSearchSubmit}><FaSearch /></button>
                </form>

            </>
        )
    }
}

export default Search;