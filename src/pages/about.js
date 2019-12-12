import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Menu } from "../components/menu";
import aboutR from "../img/about-r.png";
import aboutL from "../img/about-l.png";
import aboutLMobile from "../img/about-l-2.png";
import about3 from "../img/about-3.png";

export const About = () =>
  <Container>
    <Menu logoWhite={true} background={true} />
    <Row className="pt-5">
      <Col xs={2} className="about-decoration px-sm-3 px-2">
        <img src={aboutL} className="img-fluid d-none d-sm-block" alt="decoration" />
        <img src={aboutLMobile} className="img-fluid d-block d-sm-none" alt="decoration" />
      </Col>
      <Col xs={10} sm={5} className="pl-0 pl-sm-3">
        <h3 className="about-title">ABOUT</h3>
        <br />
        Somos un estudio creativo especializado en la creación de movie trailers y contenido audiovisual para la promoción de tu película, actualmente con base en Ciudad de México.
      </Col>
      <Col xs={{span: 10, offset: 2}} sm={{span: 5, offset: 0}}>
        <img src={aboutR} className="img-fluid" alt="decoration" />
      </Col>
    </Row>
    <Row>
      <Col xs={{span: 10, offset: 2}} sm={{span: 5, offset: 2}}>
        <img src={about3} className="img-fluid d-sm-inline d-none" alt="decoration" />
      </Col>
    </Row>
  </Container>
