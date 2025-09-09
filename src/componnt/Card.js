import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({ title, text, image }) {
  return (
    <Card style={{ display:"block", width: '18rem',height:"90%", margin:"1rem" , display: 'flex', gap: '1rem' , alignItems: 'center',direction:"rtl" }}>
      <Card.Img variant="top" src={image} style={{ height: '75%', objectFit: 'cover', display: 'block', alignItems: 'center' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
