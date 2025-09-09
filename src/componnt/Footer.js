import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  return (
    <footer style={{ backgroundColor: "#f8f9fa", padding: "1rem", marginTop: "2rem" }}>
      <Container>
        {/* رابط الانستغرام */}
        <Row className="text-center align-items-center mb-2">
          <Col>
            <a 
              href="https://www.instagram.com/username"  
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#000", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <img src="/images/instalogo.png" alt="Instagram" width="24" height="24" />
              زوروا صفحتنا على الانستغرام
            </a>
          </Col>
        </Row>

        {/* حقوق الطبع */}
        <Row className="text-center">
          <Col>
            <p>© {new Date().getFullYear()} متجر بيسان - جميع الحقوق محفوظة</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
