import React from 'react'
import {Component} from 'react'
import SearchGrid from '../components/SearchGrid/SearchGrid';

class ResultadoDeBusqueda extends Component {
    constructor(props){
        super(props);

        this.state = {
            movies:[]
            //Hacer lo de loading aca
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.inputSearch}&api_key=33e10f642f640258287c658cad162391`)
        .then(response => response.json())
        .then((data) => 
            this.setState({
                movies:data.results,
        })) .catch(error=> console.log(error))


    }

    render(){
        const { movies, isLoading } = this.state;
        return(
            <div>
                <h1>Resultados para: {this.props.location.state.inputSearch}</h1>
                <SearchGrid movies={this.state.movies}/>
            </div>
        )
    }
}


export default ResultadoDeBusqueda
