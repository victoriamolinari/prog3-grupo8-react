import { Component } from 'react';
import './styles.css';

class DetallePelicula extends Component {
    //const{nombre, img, calificacion, estreno, duracion, sinopsis} = id;
    constructor(props) {
        super(props);
        this.state = {
            movies: null
        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=31e421d77201e7a1eefe33f85b67fa3b`)
            .then(response => response.json())
            .then(data => {
                console.log('Datos recibidos:', data); // Imprime los datos recibidos
                this.setState({ movies: data }, () => {
                    console.log('Estado actualizado:', this.state.movies); // Verifica el estado actualizado
                });
            })
            .catch(error => console.error('Error: ', error));

            console.log(this.state.movies);
            
    }
    
    render(){
        return(
            <h1>hola</h1>

        )
    }

    }
    

export default DetallePelicula;
