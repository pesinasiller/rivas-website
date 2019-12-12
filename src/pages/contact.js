import React, {Component} from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import TextareaAutosize from 'react-textarea-autosize';
import { Menu } from "../components/menu";
import aboutContact from "../img/about-contact.png";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        nombre: '',
        telefono: '',
        email: '',
        mensaje: '',
      },
      formError: false,
      formSubmitted: false,
    };
  }

  handleChange = (evt) => {
    const formData = this.state.formData;
    formData[evt.target.name] = evt.target.value;
    this.setState({ formData });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(
      "https://formcarry.com/s/i-zCpD8qxTB",
      this.state.formData,
      {headers: {"Accept": "application/json"}}
      )
      .then( (response) => {
        this.setState({
          formSubmitted: true,
          formError: false,
        });
      })
      .catch( (error) => {
        console.log(error);
        this.setState({ formError: true });
      });
  }

  render(){
    const {
      nombre,
      telefono,
      email,
      mensaje,
      formError,
      formSubmitted,
    } = this.state;
    return(
      <Container>
        <Menu logoWhite={true} background={true} />
        <br /><br /><br /><br />
        <Row className="pt-5">
          <Col xs={12} md={2}>
              <img src={aboutContact} className="contact-decoration" alt="decoration" />
          </Col>
          <Col xs={12} md={4} id="contact">
              <h3>CONTACT</h3>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col xs={12} md={2}>
          </Col>
          <Col xs={12} md={4} id="contact">
              <p>
                  <a href="mailto:r@rivascinemarketing.com">
                      info@rivascinemarketing.com
                  </a>
              </p>
              <p>
                  <a href="tel:0115267312168">
                      011 (52) 67312168
                  </a>
              </p>
              <p>
                  CDMX,
                  <br />
                  Condesa.
                  <br />
                  <br />
              </p>
          </Col>
          <Col xs={12} md={6}>
            <div>
              {formSubmitted ? 'Gracias por contactarnos' : (
                <form onSubmit={this.handleSubmit} className="doctores-form">

                  <div className="d-flex">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                      id="nombre"
                      name="nombre"
                      className="flex-grow-1"
                      value={nombre}
                      onChange={this.handleChange}
                    />

                  </div>
                  <div className="d-flex">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                      id="telefono"
                      name="telefono"
                      className="flex-grow-1"
                      value={telefono}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="d-flex">
                    <label htmlFor="email">Email:</label>
                    <input
                      id="email"
                      name="email"
                      className="flex-grow-1"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="d-flex">
                    <label htmlFor="mensaje"
                      style={{paddingRight: '5px'}}
                    >
                      Mensaje:
                    </label>
                    <TextareaAutosize
                      id="mensaje"
                      name="mensaje"
                      className="flex-grow-1"
                      value={mensaje}
                      onChange={this.handleChange}
                    />
                  </div>
                  <br />
                  <button type="submit" className="text-white float-right">
                    ENVIAR
                  </button>
                </form>
              )}
              {formError && <div>Error al enviar</div>}
            </div>
          </Col>
        </Row>

      </Container>
    )
  }
}
