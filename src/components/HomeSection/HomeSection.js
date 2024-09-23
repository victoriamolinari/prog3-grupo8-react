import Card from '../Card/Card';
import './styles.css';

import { Component } from 'react';
import { Link } from 'react-router-dom';


const HomeSection = (props) => { // recibe sectionName y data con un array de películas
    return (
        <>
            <div className="div-section">
                <h3 className="h3-section">{props.sectionName}</h3>
                <Link to={`/${props.sectionName.toLowerCase()}`}><button className="ver-todas-button">Ver todas</button></Link >
            </div>

            <section className="movies-grid">
                {props.data == undefined ?
                    <p>Cargando...</p> :
                    props.data.map((movies, idx) => (<Card key={idx} movies={movies} />))}
            </section>
        </>
    )
}

export default HomeSection;