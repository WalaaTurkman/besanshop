// src/pages/Bags.js
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import BasicExample from "../componnt/Card";

const bagsData = [
  { title: "Chloè", price: 130, image: "/images/bags/Chloè.jpg" },
  { title: "Coach", price: 160, image: "/images/bags/Coach.jpg" },
  { title: "Coach burgundy -High quality", price: 80, image: "/images/bags/Coachburgundy.jpg" },
  { title: "Coach camel -High quality", price: 80, image: "/images/bags/Coachcamel.jpg" },
  { title: "ميدالية كوتش", price: 15, image: "/images/bags/CoachMidal.jpg" },
  { title: "Coach tabby- بيج أسود عسلي", price: 160, image: "/images/bags/Cochtabby.jpg" },
  { title: "Lacoste", price: 100, image: "/images/bags/Lacoste (2).jpg" },
  { title: "Longchamp black", price: 80, image: "/images/bags/Longchampblack.jpg" },
  { title: "Longchamp offwhite", price: 80, image: "/images/bags/Longchampoffwhite.jpg" },
  { title: "Michael kors", price: 150, image: "/images/bags/Michaelkors.jpg" },
  { title: "Mini Fendi", price: 120, image: "/images/bags/MiniFendi.jpg" },
  { title: "Miu miu", price: 150, image: "/images/bags/Miumiu.jpg" },
  { title: "Polène - عسلي", price: 180, image: "/images/bags/Polin.jpg" },
  { title: "Polène بيج ", price: 180, image: "/images/bags/Polinb.jpg" },
  { title: "Polène Black ", price: 180, image: "/images/bags/Polinblack.jpg" },
  { title: "Polène numero neuf", price: 170, image: "/images/bags/Polinnumeroneuf.jpg" },
];

function Bags() {
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedBags = [...bagsData].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <Container style={{ marginTop: "1rem", direction: "rtl" }}>
      <h2 className="text-center mb-4" style={{ fontFamily: "Cairo" }}>👜 مجموعة الحقائب</h2>

      {/* القائمة المنسدلة لاختيار الترتيب */}
      <Form.Select
        style={{ maxWidth: "250px", marginBottom: "1rem" }}
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">السعر: من الأقل إلى الأعلى</option>
        <option value="desc">السعر: من الأعلى إلى الأقل</option>
      </Form.Select>

      <Row>
        {sortedBags.map((bag, index) => (
          <Col key={index} md={4}>
            <BasicExample
              title={bag.title}
              text={`${bag.price} شيكل`}
              image={bag.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Bags;
