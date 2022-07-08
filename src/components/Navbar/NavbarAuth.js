import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.svg'
// import { useContext } from 'react'
// import { UserContext } from '../context/userContext'
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, Button } from 'react-bootstrap'

function NavbarAuth() {
    //   const [state, dispatch] = useContext(UserContext)

    //   let navigate = useNavigate()

    //   const logout = () => {
    //       console.log(state)
    //       dispatch({
    //           type: "LOGOUT"
    //       })
    //       navigate("/auth")
    //   }
    // onClick={logout} 
    return (
        <Navbar bg="transparent" expand="lg" >
            <Container>
                <Navbar.Brand href="#"><img src={logo} style={{ maxWidth: '8rem' }} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="align-items-center">
                        <Nav.Link as={Link} to="/">
                            <Button variant="outline-dark" style={{ borderRadius:0, borderWidth:'3px', width:'6rem', height:'2.5rem' }}>Login</Button>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/">
                            <Button variant="dark" style={{ borderRadius: 0, width:'6rem', height:'2.5rem' }}>Register</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarAuth;