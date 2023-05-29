import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CgProfile} from 'react-icons/cg';
import {RiArrowDropDownLine} from 'react-icons/ri';


const  Header=()=>{
  return (
    <Navbar expand="lg" className="Navbar" >
      <Container>
        <Navbar.Brand href="#"><img src="/logo.png" alt="logo"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-items ms-auto">
            <Nav.Link> My Assignment</Nav.Link>
            <Nav.Link>Chat with Mentor</Nav.Link>
            <Nav.Link className="profile"><span><CgProfile /></span>ProfileName<RiArrowDropDownLine/></Nav.Link>    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;