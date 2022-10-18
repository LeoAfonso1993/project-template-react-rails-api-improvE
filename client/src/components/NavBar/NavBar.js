import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import logo from "../../images/improve-low-resolution-logo-transparent-background.png"



function NavBar() {

    const {user, setUser, setCurrentUser} = useContext(UserContext);

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
        .then(() => setCurrentUser([]))
        .then(() => localStorage.clear())
    }

    function handleHomeClick(){
      if(user.is_admin === true){
        console.log(typeof(allTrainings))
        navigate("/admindashboard")
      } else {
        navigate("/mytrainings")
      }
    }


    return (
        <Navbar collapseOnSelect expand="lg" style={{color: 'white', background: '#0B0742'}} variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img alt="logo" src={logo} style={{height: "30px"}} >{}</img>&nbsp;ImprovE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>{user ? user.email : "" }</Nav.Link>
              </Nav>
              <Nav className="home-auto">
                {user ? <Nav.Link onClick={handleHomeClick}>Home</Nav.Link> : "" }
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