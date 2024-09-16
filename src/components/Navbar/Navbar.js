import "./styles.css"

const Header = () => {

    return (
        <div className="navbar"> 
            <ul className="ul-nav">
                <li> <a href='/'>Home</a> </li>
                <li> <a href='/favoritos'> Favoritos</a> </li>
                <li> <a href='/upcoming'> Upcoming</a> </li>
                <li> <a href ='/populares'> Populares</a> </li>
            </ul>
        </div>
    )
}

export default Header;