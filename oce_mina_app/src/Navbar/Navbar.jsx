import {Navbar,Container,Nav} from "react-bootstrap"
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
          <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home" as={Link} to="/App">Jouer</Nav.Link>
            <Nav.Link href="#features" as={Link} to="/Wordpage/:id">Liste de Mots</Nav.Link>
           
            </Nav>
            </Container>
        </Navbar>
    )
}