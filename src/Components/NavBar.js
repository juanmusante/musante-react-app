import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar({ product }){
    return(
        <header className="App-header shadow p-3 mb-5 bg-body rounded">
            <Link to="/"><h1 className="logo">TATT00 SH0P</h1></Link>
            <nav className="navegador">
                <ul className="ul">
                    <li className="li">
                        <Link to='/category/Rotativa'>Rotativas</Link>
                    </li>
                    <li className="li">
                        <Link to='/category/Bobina'>Bobina</Link>
                    </li>
                    <li className="li">
                        <Link to='/category/Lapiz'>Lápiz</Link>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    );
}
export default NavBar;