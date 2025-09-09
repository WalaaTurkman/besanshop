import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavComponent() {
  return (
    <Navbar  style={{ backgroundColor: "transparent", direction: "rtl" ,height:"90px"}}>
      {/* اللوجو كرابط */}
      <Navbar.Brand as={Link} to="/">
        <img
          src="/logostore.png"
          width="100"
          height="100"
          alt="شعار الموقع"
        />
      </Navbar.Brand>

      {/* الروابط */}
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/">الصفحة الرئيسية</Nav.Link>
        <Nav.Link as={Link} to="/bags">حقائب</Nav.Link>
        <Nav.Link as={Link} to="/cups">أكواب</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavComponent;
