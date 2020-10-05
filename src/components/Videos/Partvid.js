import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Partvid() {
  return (
    <Container>
      <span className="text-center">
        <h1>Videos</h1>
      </span>
      <br />

      <Row>
        <Col xs={12} md={4}>
          <iframe
            className=" embed-responsive-16by9"
            src="https://www.youtube.com/embed/8b0ubLO2MUE"
            frameBorder="0"
            title="Six siexes"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Col>

        <Col xs={12} md={4}>
          <iframe
            className=" embed-responsive-16by9"
            src="https://www.youtube.com/embed/8b0ubLO2MUE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Col>

        <Col xs={12} md={4}>
          <iframe
            className=" embed-responsive-16by9"
            src="https://www.youtube.com/embed/8b0ubLO2MUE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Col>

        <Col xs={12} md={4}>
          <iframe
            className=" embed-responsive-16by9"
            src="https://www.youtube.com/embed/8b0ubLO2MUE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Col>

        <Col xs={12} md={4}>
          <iframe
            className=" embed-responsive-16by9"
            src="https://www.youtube.com/embed/8b0ubLO2MUE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Col>

        <Col xs={12} md={4}>
          <iframe
            className=" embed-responsive-16by9"
            src="https://www.youtube.com/embed/8b0ubLO2MUE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>

      <span className="text-center">
        <a className="button">See More!</a>
      </span>
    </Container>
  );
}

export default Partvid;
