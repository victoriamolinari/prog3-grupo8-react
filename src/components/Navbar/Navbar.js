import "./styles.css"

const Header = () => {

    return (
        <div className="navbar"> 
            <ul className="ul-nav">
                <li> <a href='/'>Home</a> </li>
                <li> <a href='/favoritos'> Favoritos</a> </li>
                <li> <a href='/top-10'> Top 10</a> </li>
                <li> <a href ='/populares'> Populares</a> </li>
            </ul>
        </div>
    )
}

export default Header;