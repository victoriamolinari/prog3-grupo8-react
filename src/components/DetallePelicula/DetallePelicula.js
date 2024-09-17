import { Component } from 'react';
import './styles.css';

class DetallePelicula extends Component {
    //const{nombre, img, calificacion, estreno, duracion, sinopsis} = id;
    constructor(props) {
        super(props);
        this.state = {
            results:[]
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key = 31e421d77201e7a1eefe33f85b67fa3b`)
            .then(response => response.json())
            .then(data => this.setState({ results: data.results }))
            .catch(error => console.error('Error: ', error));
            console.log(this.state.results)
        }
    
    render(){
        return(
            <h1>hola</h1>

        )
    }

    }
    

export default DetallePelicula;
