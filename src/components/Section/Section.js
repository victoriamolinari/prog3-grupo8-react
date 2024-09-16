import Card from '../Card/Card';

const Section = ({ sectionName, data }) => {    

    return (
        <>
            <h3 className="h3-section">{sectionName}</h3> 
            
            {/* Falta botón a ver todas */}

            <section className="movies-grid">
                    {data == [] ?
                        <p>Cargando...</p> :
                        data.map((movies, idx) => (<Card key={idx} movies={movies} />))}
                </section>
        </>
    )
}


export default Section;