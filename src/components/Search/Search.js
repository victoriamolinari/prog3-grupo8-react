import './styles.css';
import { Component } from 'react';
import { FaSearch } from "react-icons/fa";

class Search extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            inputSearch: "",
        }
    }

    handleSearchChange(event) {
        this.setState({ 
        inputSearch: event.target.value });
    }

    handleCancelSubmit(event){
        event.preventDefault()
    }

    handleSearchSubmit(){
        console.log("envio")
        this.props.history.push('/search', {inputSearch: this.state.inputSearch})
    }

    render() {
        return (
            <>
                <form onSubmit={(event) => this.handleSearchSubmit(event)}>
                    <input 
                        onChange={(event) => this.handleSearchChange(event)}
                        name="inputSearch"
                        value={this.state.inputSearch}
                        placeholder="Buscar películas..."
                    />
                    <button onClick={()=>this.handleSearchSubmit}><FaSearch /></button>
                </form>
                
            </>
        )
    }
}

export default Search;