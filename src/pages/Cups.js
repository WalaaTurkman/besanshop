
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import BasicExample from "../componnt/Card";

const cupsData = [
  { title: "مچ بطوطة بُني", price: 20, image: "/images/cups/batamug.jpg" },
  { title: "فنجان هاند ميد الغيوم", price: 30, image: "/images/cups/cloudmug.jpg" },
  { title: "مج هاند ميد مورد", price: 25, image: "/images/cups/flowermug.jpg" },
  { title: "مچ هاند ميد مورد بدون صحن", price: 25, image: "/images/cups/flowermugNoshan.jpg" },
  { title: "مچ هاند ميد مورد", price: 25, image: "/images/cups/flowerwhitmug.jpg" },
  { title: "مچ مموج اخضر", price: 20, image: "/images/cups/greenmug.jpg" },
  { title: "مچ هاند ميد قلوب أرضية زهري", price: 25, image: "/images/cups/heartmug.jpg" },
  { title: "مچ فيونكة أزرق", price: 25, image: "/images/cups/justgirlbluemug.jpg" },
  { title: "مچ هاند ميد فيونكات", price: 25, image: "/images/cups/justgirlmug.jpg" },
  { title: "فنجان هاند ميد فيونكات مع صحن", price: 30, image: "/images/cups/justgirlwithshn.jpg" },
  { title: "مچ باندا", price: 25, image: "/images/cups/pandamug.jpg" },
  { title: "مچ بطوطة زهري", price: 20, image: "/images/cups/pinkbatamug.jpg" },
  { title: "مچ مموج زهري", price: 20, image: "/images/cups/pinkmug.jpg" },
];

function Cups() {
  const [sortOrder, setSortOrder] = useState("asc"); // الحالة الافتراضية: تصاعدي

  // عمل نسخة مرتبة من البيانات حسب الاختيار
  const sortedCups = [...cupsData].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <Container style={{ marginTop: "1rem", direction: "rtl" }}>
      <h2 className="text-center mb-4" style={{ fontFamily: "Cairo" }}>
        🧉 مجموعة الأكواب
      </h2>

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
        {sortedCups.map((cup, index) => (
          <Col key={index} md={4}>
            <BasicExample
              title={cup.title}
              text={`${cup.price} شيكل`}
              image={cup.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cups;
