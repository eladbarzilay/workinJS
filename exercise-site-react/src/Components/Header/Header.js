import "./Header.css";
import { Link } from "react-router-dom";

function Header(){
    return (
        <div className="Header">
            <ul>
            <li className="headerPage">
			<Link className="Link" to="/">דף הבית  </Link>        
            </li>
            <li className="headerPage">
            <Link className="Link" to="/admin">  דף מנהל  </Link>
            </li>
            <li className="headerPage">
            <Link className="Link" to="/login">התחברות\רישום  </Link>
            </li>
            </ul>
        </div>
    );
}

export default Header;
