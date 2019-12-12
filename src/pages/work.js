import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Menu } from "../components/menu";
import { VideoModal } from "../components/videoModal";
import { client, urlForImage } from "../components/sanityClient";
import moreProyectsOverlay from "../img/more_projects_overlay.png";

export class Work extends React.Component {
 constructor(props, context) {
    super(props, context);

    this.fetchProjects = this.fetchProjects.bind(this);
    this.moreProjects = this.moreProjects.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
        show: false,
        page: 12,
        proyects: [],
        proyecto: {}
    };
  }

  componentDidMount() {
    this.fetchProjects()
  }

  fetchProjects(){
    client
      .fetch(
        `*[_type == $type] | order(publishedAt desc)`,
        { type: "proyectos" }
      )
      .then(res => {
        this.setState({ proyects: res });
      })
      .catch(err => {
        console.error("Oh no, error occured: ", err);
      });
  }

  moreProjects(){
      this.setState({ page: this.state.page + 2 })
  }

  handleClose() {
    this.setState({ show: false, proyecto: {} });
  }

  handleShow(item) {
      console.log(item)
    this.setState({ show: true, proyecto: item });
  }
  render() {
    const loadedProjects = this.state.proyects.slice( 0, this.state.page )
    const numberOfProyects = loadedProjects.length;
    const allLoaded = this.state.proyects.length < this.state.page ? true : false
    const proyectElements = loadedProjects.map((item, key) =>
        <React.Fragment key={key}>
        <Col xs={6} md={2} className="py-2" onClick={ () => this.handleShow(item) }>
            <img
              className="img-fluid proyecto-img"
              alt={item.titulo}
              src={urlForImage(item.imagenEnCatalogo)
                .width(200)
                .url()}
            />
        </Col>
          {(numberOfProyects === key + 1 ) && !allLoaded &&
            <Col xs={6} md={2} className="py-2" >
                <img
                  onClick={ this.moreProjects }
                  className="img-fluid proyecto-img"
                  style={{ width: "200px" }}
                  alt="load more proyects"
                  src={moreProyectsOverlay}
                />
            </Col>
          }
        </React.Fragment>);
    return (
      <div className="background-pattern">
          <Container>
            <Menu textWhite={true} background={true} />
            <Row className="py-5">
                {proyectElements}
            </Row>

            <VideoModal
                show={this.state.show}
                handleClose={this.handleClose}
                proyecto={this.state.proyecto} />
          </Container>
      </div>
    );
  }
}
