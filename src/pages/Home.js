

import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BasicExample from "../componnt/Card";
import UncontrolledExample from "../componnt/Carousel";
import "../App.css";


const products = [
  {
    title: "مچ بطوطة بُني",
    text: "20 شيكل",
    image: "/images/cups/batamug.jpg",
  },
  {
    title: "فنجان هاند ميد الغيوم",
    text: "30 شيكل",
    image: "/images/cups/cloudmug.jpg",
  },
  {
    title: "مچ هاند ميد مورد بدون صحن",
    text: "25 شيكل",
    image: "/images/cups/flowermug.jpg",
  },
  { title: "Miu miu",
    text: "150 شيكل",
    image: "/images/bags/Miumiu.jpg",
  },
  {
    title: "Lacoste",
    text: "100 شيكل",
    image: "/images/bags/Lacoste (2).jpg",
  },
  {
    title: "Chloè",
    text: "130 شيكل",
    image: "/images/bags/Chloè.jpg",
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

        {/* الأزرار */}
        <div
          style={{
            display: "flex",
            justifyContent: "Flex-Start",
            marginTop: "2rem",
            gap: "1rem",
          }}
        >
          <Link to="/bags">
            <Button variant="dark">👜 عرض المزيد - الحقائب</Button>
          </Link>
          <Link to="/cups">
            <Button variant="dark">☕ عرض المزيد - الأكواب</Button>
          </Link>
        </div>

        {/* البطاقات */}
        <Row style={{ direction: "rtl", marginTop: "2rem" }}>
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
