import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';



function NavBar() {

    const {user, setUser} = useContext(UserContext);

    const navigate = useNavigate();

    function handleClick(){
        fetch("/logout", {
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify()
          })
        /*.then((response) => response.json())*/
        .then(() => setUser(null))
        .then(() => navigate("/"))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">ImprovE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>{user ? user.email : "" }</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link onClick={handleClick}>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    
}

export default NavBar;