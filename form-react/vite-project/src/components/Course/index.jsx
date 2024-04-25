import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Course({ product, setData, data}) {
  const handleDelete = (id) => {
    // console.log(id);
    const a = [...data.filter((q) => q.id !== id)];
    // console.log(a)
    setData(a)
  };
  return (
    <Card style={{ width: "18rem", maxHeight: "500px" }}>
      <Card.Img
        variant="top"
        src={product.img}
        style={{ minHeight: "300px", objectFit: "cover" }}
      />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}$</Card.Text>
        <Button
          variant="outline-danger"
          onClick={() => handleDelete(product.id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Course;
