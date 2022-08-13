import React from 'react';
// import { Container,Navbar } from 'react-bootstrap';
import Link from 'next/link';
// import styles from "../../styles/Nav.module.css";
import "bootstrap/dist/css/bootstrap.css";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="">
          <ul className="navbar-nav mx-auto d-inline">
           
           <Link className="mx-md-4 mx-2 h4 text-dark linkhover" href="/">Home</Link>
           <Link  className="mx-md-4 mx-2 h4 text-dark linkhover" href="/drinks">Drinks</Link>
           <Link className="mx-md-4 mx-2 h4 text-dark linkhover" href="/food">Food</Link>
            
          </ul>
        </div>
        </nav>

    )
}


export default Nav

