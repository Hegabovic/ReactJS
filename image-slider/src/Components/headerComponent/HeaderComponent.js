import {Container, Nav, NavbarBrand} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import './headerComponent.css'

let Header = ()=>{
    return(
        <div>
                <Navbar bg="dark" variant="light">
                    <Container>
                        <NavbarBrand >ReactJs</NavbarBrand>
                        <Nav className="me-auto">
                            <NavLink  to={'/home'}>Home</NavLink>
                            <NavLink  to={'/lab1'}>Lab 1</NavLink>
                            <NavLink  to={'/about'}>About</NavLink>
                            <NavLink  to={'/error'}>Error</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
        </div>
    )
}



export default Header;