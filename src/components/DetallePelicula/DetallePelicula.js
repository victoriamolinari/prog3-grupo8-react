import './styles.css';

const UnaPelicula = ({peliculaDetalle}) => {
    const{nombre, img, calificacion, estreno, duracion, sinopsis} = peliculaDetalle;

    return (
        <div>
            <h2 className = "detalle-titulo">{nombre}</h2>
            <img src={img} alt={nombre} className="detalle-foto"/>
            <ul>
                <li className="">Calificacion: {calificacion} </li>
                <li className="">Estreno: {estreno} </li>
                <li className="">Duracion: {duracion} </li>
                <li className="">Sinopsis: {sinopsis} </li>
            </ul>
        </div>
    )
}
export default UnaPelicula;
