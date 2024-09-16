import "./styles.css";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="navbar"> 
            <ul className="ul-nav">
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/favoritos'> Favoritos</Link> </li>
                <li> <Link to='/upcoming'> Upcoming</Link> </li>
                <li> <Link to='/populares'> Populares</Link> </li>
            </ul>
        </div>
    )
}

export default Header;
