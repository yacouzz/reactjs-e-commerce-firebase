import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import { auth } from './firebase/firebase.utils';
import  Cart  from './cart/Cart';


const Navebar = ({currentUser, hidden})=>{
    return(
        
        <Navbar bg="dark" expand="lg">
            <Container>
            <Navbar.Brand style={{color:'white'}} href="#home">YaCouzz</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                        <Link className="navv-link nav-link" to="/">Accueil</Link>
                        {
                            currentUser ? <Nav.Link className="text-white" onClick={()=>auth.signOut()}>Déconnexion</Nav.Link> : <Link className="navv-link nav-link" to="/signin">Connexion</Link>
                        }
                       
                        
                </Nav>
                { <Cart/>}
            
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Navebar);

/*<NavDropdown
                        title={ <span className="text-primary my-auto" id="myDrop">Dropdown</span>}
                        id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>*/