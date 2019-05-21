import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Menu } from "../components/menu";
import aboutR from "../img/about-r.png";
import aboutL from "../img/about-l.png";
import about3 from "../img/about-3.png";
import aboutContact from "../img/about-contact.png";
import "../styles.css";

export const About = () =>
  <Container>
    <Menu logoWhite={true} background={true} />
    <Row className="py-5">
      <Col xs={2} className="about-decoration">
        <img src={aboutL} className="img-fluid" alt="decoration" />
      </Col>
      <Col xs={10} sm={5}>
        <h3 className="about-title">ABOUT</h3>
        Hoy en día la industria cinematográfica va creciendo de manera
        acelerada y las ofertas de contenido audiovisual han llegado a una
        lucha por tener al espectador a la espera de productos de alta
        calidad, entretenimiento y riquezas visuales es por eso que RIVAS
        CINEMARKETING busca ofrecerte las mejores alternativas y tendencias
        de marketing para que tu producto tenga alto impacto en el publico
        deseado.
      </Col>
      <Col xs={{span: 10, offset: 2}} sm={{span: 5, offset: 0}}>
        <img src={aboutR} className="img-fluid" alt="decoration" />
      </Col>
    </Row>
    <Row>
      <img src={about3} className="img-fluid d-sm-inline d-none" alt="decoration" />
    </Row>
    <Row>
        <Col id="clients" className="text-center pb-4">
            <h3>CLIENTS</h3>
        </Col>
    </Row>
    <Row className="pb-5">
        <Col xs={{span: 12, offset: 0}} sm={{span: 8, offset: 2}}>
            <p>
                Hemos colaborado con más de 150+ títulos durante 5 años creando campañas para directores de renombre como lo es: AMAT ESCALANTE, MANOLO CARO,  JULIO HERNANDEZ CORDON, NATALIA BERISTAIN, MARIA JOSE CUEVAS y JONAS CUARON Por mencionar algunos. 
            </p>
            <p>
                Así mismo trabajamos con distintas agencias de publicidad y distribuidoras nacionales e internacionales: LUXBOX, CINES YELMO (ESPAÑA), CINES HOYTS (CHILE), CINES VILLAGE (ARGENTINA), CINEPOLIS DISTRIBUCIÓN, +QUECINE, PIANO, CINECANIBAL, MACHETE CINE, THE MAESTROS, WOO FILMS, INVICTA FILMS, con los cuales generamos contenidos actualmente.
            </p>
        </Col>
    </Row>
    <Row>
        <Col>
            <img src={about3} className="img-fluid d-sm-none" alt="decoration" />
        </Col>
    </Row>
    <Row className="pt-5">
        <Col xs={1}>
            <img src={aboutContact} className="contact-decoration" alt="decoration" />
        </Col>
        <Col xs={{span: 10, offset: 2}} id="contact">
            <h3>CONTACT</h3>
        </Col>
    </Row>
    <Row>
        <Col xs={{span: 10, offset: 2}} sm={{span: 4, offset: 4}}>
            <p>
                <a href="mailto:r@rivascinemarketing.com">
                    r@rivascinemarketing.com
                </a>
            </p>
            <p>
                <a href="tel:0115267312168">
                    011 (52) 67312168
                </a>
                <br />
                <a href="tel:+5215518156242">
                    +52 1 (55) 18156242
                </a>
            </p>
            <p>
                CDMX,
                <br />
                Condesa. 
            </p>
        </Col>
    </Row>

  </Container>

