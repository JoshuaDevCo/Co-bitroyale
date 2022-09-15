import { ConnectButton } from "web3uikit"
import Image from 'next/image'
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import logo from "../image/Logo.png"

export default function Header() {
    return (
        <nav className=" border-b-2 flex flex-row" style={{ backgroundColor: "#000" }}>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg=""
                variant="dark"
                style={{ backgroundColor: "#000" }}
            >
                <Container>
                    <Navbar.Brand href="#home">
                        <Image
                            src={logo}
                            alt="Picture of the author"
                            width="100px"
                            height="25px"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features"></Nav.Link>
                            <Nav.Link href="#pricing"></Nav.Link>
                            <Nav.Link href="#pricing"></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} >
                            <a href="#" className="myButton">
                            Connect Wallet
                        </a>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    )
}
