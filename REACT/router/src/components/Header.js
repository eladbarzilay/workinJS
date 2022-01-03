import { Link } from "react-router-dom";

export default function Header(){

    let theName = "sason"

    return <header>
        <nav>
            <Link to="/" > Home </Link>
            <Link to="/about"> About </Link>
            <Link to={`/my-name/${theName}`} > {theName}  </Link>
            <Link to="/my-name/dani" > dani  </Link>
        </nav>
        </header>
}
