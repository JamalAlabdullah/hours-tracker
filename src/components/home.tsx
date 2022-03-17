import {useState, useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';


import Hour from "./hour/hour";
import Hours from "./hour/hours";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [hours, setHours] = useState([]);
   useEffect(() => {
        fetchHoursFromLS(setHours, setLoading);
      }, []);
  return (
  <Container fluid>
    <Row>
      <Col><Hour handleSave={ () => {fetchHoursFromLS(setHours, setLoading)}} />  </Col>
      <Col><Hours hours={hours} loading={loading} />  </Col>
    </Row>
  </Container>
  );
};

export default Home;


const fetchHoursFromLS: any = (setHours: Function, setLoading: Function) => {
  setLoading(true);
  setTimeout(()=> {
  let hours = [];
  if (localStorage.hours !== "undefined") {
    hours = JSON.parse(localStorage.hours);
  }
  setHours(hours);
  setLoading(false);
}, 800);
}
