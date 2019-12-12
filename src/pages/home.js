import React from "react";
import { Container, Col, Carousel } from "react-bootstrap";
import { Menu } from "../components/menu";
import { client, urlForImage } from "../components/sanityClient";
import { VideoModal } from "../components/videoModal";

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        isMobile: false,
        show: false,
        proyects: [],
        proyecto: {}
    };
  }
  componentDidMount(){
    window.addEventListener("resize", this.onResize.bind(this));
    this.onResize();
    client
      .fetch(
        `(*[_type == $type && mostrarEnHome == $mostrarEnHome] | order(publishedAt desc) )`, // Query
        { type: "proyectos", mostrarEnHome: true } // Params (optional)
      )
      .then(res => {
        this.setState({ proyects: res });
      })
      .catch(err => {
        console.error("Oh no, error occured: ", err);
      });
  }

  onResize = () => {
    this.setState({ isMobile: window.innerWidth <= 576 });
  }

  handleClose = () => {
    this.setState({ show: false, proyecto: {} });
  }

  handleShow = (item) => {
    this.setState({ show: true, proyecto: item });
  }

  render() {
    const mobile = this.state.isMobile;
    const blurryCarousel = this.state.show ? "blurry" : "";
    const proyectSlides = this.state.proyects.map((item, key) =>
      (true &&//item.
      <Carousel.Item key={key} style={{
        backgroundImage: `url( ${ urlForImage( mobile ? item.imagenEnHomeMovil : item.imagenEnHome ) } )` }}>
        <Carousel.Caption onClick={() => this.handleShow(item)} className="text-left">
            <Container className="px-0">
                <Col xs={12} sm={5}>
                    <h3 className="titulo-proyecto">{item.titulo}</h3>
                    <div className="view-proyect-button">view proyect</div>
                </Col>
            </Container>
        </Carousel.Caption>
      </Carousel.Item>)
    );
    return (
        <>
            <Carousel className={`home-carousel ${blurryCarousel}`}
            controls={false}
            indicators={false}
            fade={true}
            pauseOnHover={false}
            interval={ this.state.show ? null : 3000 }>
                {proyectSlides}
            </Carousel>
            <Container>
                <Menu />

            <VideoModal
                show={this.state.show}
                handleClose={this.handleClose}
                proyecto={this.state.proyecto} />
            </Container>
        </>
    );
  }
}
