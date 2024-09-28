import DetallePelicula from '../components/DetallePelicula/DetallePelicula';

const Detalle = ({ match }) => {

    const { id } = match.params;
    return (
        <DetallePelicula id={id} />
    )
}

export default Detalle;