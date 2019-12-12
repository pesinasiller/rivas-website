import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Menu } from "../components/menu";
import about3 from "../img/about-3.png";
import clientsDecoration from "../img/clients-decoration-2.png";
import canibal from "../img/clients/canibal.png";
import cinepolis from "../img/clients/cinepolis.png";
import hoyts from "../img/clients/hoyts.png";
import invicta from "../img/clients/invicta.png";
import luxbox from "../img/clients/luxbox.png";
import machete from "../img/clients/machete.png";
import masquecine from "../img/clients/masquecine.png";
import morelia from "../img/clients/morelia.png";
import piano from "../img/clients/piano.png";
import fosforescente from "../img/clients/fosforescente.png";
import maestros from "../img/clients/maestros.png";
import village from "../img/clients/village.png";
import woo from "../img/clients/woo.png";
import yelmo from "../img/clients/yelmo.png";

export const Clients = () =>
  <Container>
    <Menu logoWhite={true} background={true} />
    <br /><br /><br />
    <Row>
      <Col id="clients" className="text-center pb-4">
          <h3>CLIENTS</h3>
      </Col>
    </Row>
    <Row className="d-flex flex-wrap align-items-center">
      <Col xs={4} md className="py-3">
        <img src={fosforescente} className="img-fluid" alt="logo fosforescente" />
      </Col>
      <Col xs={4} md className="py-3">
        <img src={village} className="img-fluid" alt="logo village" />
      </Col>
      <Col xs={4} md className="py-3">
        <img src={woo} className="img-fluid" alt="logo woo" />
      </Col>
      <Col xs={4} md className="py-3">
        <img src={canibal} className="img-fluid" alt="logo canibal" />
      </Col>
      <Col xs={4} md className="py-3">
        <img src={hoyts} className="img-fluid" alt="logo hoyts" />
      </Col>
      <Col xs={4} md className="py-3">
        <img src={machete} className="img-fluid" alt="logo machete" />
      </Col>
      <Col xs={4} md className="py-3 d-sm-inline d-none">
        <img src={invicta} className="img-fluid" alt="logo invicta" />
      </Col>
    </Row>
    <Row className="px-md-5 d-flex flex-wrap align-items-center">
      <Col xs={4} md className="py-3">
        <img src={luxbox} className="img-fluid" alt="logo luxbox" />
      </Col>
      <Col xs={4} md className="py-3">
        <img src={masquecine} className="img-fluid" alt="logo más que cine" />
      </Col>
      <Col xs={4} md className="py-3">
        <img src={piano} className="img-fluid" alt="logo piano" />
      </Col>
      <Col xs={4} md className="py-3">
        <img src={yelmo} className="img-fluid" alt="logo yelmo cines" />
      </Col>
      <Col xs={4} md className="py-3">
        <img src={morelia} className="img-fluid" alt="logo festival de cine de morelia" />
      </Col>
      <Col xs={4} md className="py-3">
        <img src={cinepolis} className="img-fluid" alt="logo cinépolis" />
      </Col>
      <Col xs={4} md className="py-3">
        <img src={maestros} className="img-fluid" alt="logo maestros" />
      </Col>
      <Col xs={4} md className="py-3 d-sm-none d-inline">
        <img src={invicta} className="img-fluid" alt="logo invicta" />
      </Col>
    </Row>
    <br />
    <Row>
      <Col sm={{span: 5, offset: 2}}>
        <img src={about3} className="img-fluid d-sm-inline d-none" alt="decoration" />
      </Col>
      <Col>
          <img src={clientsDecoration} className="img-fluid" alt="decoration" />
      </Col>
    </Row>
  </Container>
