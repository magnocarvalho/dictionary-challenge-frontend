import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function TopNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Dictionary - Fullstack Challenge 🏅 2022</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            This is a challenge by:
            <a target="_blank" href="https://coodesh.com/">
              Coodesh
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
