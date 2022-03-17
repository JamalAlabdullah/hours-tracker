import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import Hour from "./hour/hour";
import Hours from "./hour/hours";

const Home = () => {
  return (
  <Container fluid>
    <Row>
      <Col><Hour />  </Col>
      <Col><Hours />  </Col>
    </Row>
  </Container>
  );
};

export default Home;
