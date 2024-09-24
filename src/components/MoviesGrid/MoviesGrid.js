import './styles.css';
import { Link } from 'react-router-dom';

import Section from '../Section/Section';


const MoviesGrid = (props) => { // recibe sectionName y movies
    return (
        <>
            <div className="div-section">
                <h3 className="h3-section">{props.sectionName}</h3>
                <Link to={"/" + props.sectionName.toLowerCase()}><button className="ver-todas-button">Ver todas</button></Link >
            </div>

            <Section movies={props.movies} />
        </>
    )
}

export default MoviesGrid;

