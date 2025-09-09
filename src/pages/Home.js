// src/pages/Home.js
import { Container, Row, Col } from "react-bootstrap";
import BasicExample from "../componnt/Card";
import UncontrolledExample from "../componnt/Carousel";
import "../App.css";

// مصفوفة المنتجات
const products = [
  {
    title: "كوب 1",
    text: "وصف الكوب",
    image: "/images/cups/batamug.jpg",
  },
  {
    title: "البرمجة",
    text: "أساس تطوير التطبيقات والمواقع.",
    image: "/images/cups/cloudmug.jpg",
  },
  {
    title: "التعلم العميق",
    text: "فرع متقدم من الذكاء الاصطناعي.",
    image: "/images/cups/flowermug.jpg",
  },
];

function Home() {
  return (
    <div>
      <UncontrolledExample />
      <Container>
        <h2
          style={{
            textAlign: "end",
            marginBottom: "1rem",
            fontFamily: "Cairo",
          }}
        >
          ⭐ التشكيلة المميزة
        </h2>

        <Row>
          {products.map((item, index) => (
            <Col key={index} md={4}>
              <BasicExample
                title={item.title}
                text={item.text}
                image={item.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
