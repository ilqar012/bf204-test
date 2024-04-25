import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Course from "../Course";

const Courses = ({ data,setData }) => {
  return (
    <Container>
      <Row>
        {data &&
          data.map((q) => {
            return (
              <Col>
                <Course key={q.id} product={q} data={data} setData={setData}/>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Courses;
