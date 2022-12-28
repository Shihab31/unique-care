import React from "react";
import { Button, Container, Nav, Navbar, Spinner } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useSignOut } from "react-firebase-hooks/auth";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const [signOut, loading1] = useSignOut(auth);
  if (loading || loading1) {
    return <Spinner animation="border" />;
  }
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      className="header-area"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#doctors">Meet Our Doctors</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <span>{user?.displayName}</span>
            {user ? (
              <Button onClick={handleSignOut}>Sign Out</Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
