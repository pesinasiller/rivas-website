import React from "react";
import { Row, Col, Modal } from "react-bootstrap";
import "../styles.css";

export class VideoModal extends React.Component {
 constructor(props, context) {
    super(props, context);
        
    this.state = {
      videoOption: "trailer"
    };
  }

  render() {
    const proyecto = this.props.proyecto
    const videoLink = this.state.videoOption === "trailer" ? proyecto.trailerLink : proyecto.tvSpotLink
    return (
        <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <div style={{padding: "56.25% 0 0 0", position: "relative"}}>
                    <iframe src={videoLink}
                        title="video-iframe"
                        style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}
                        frameBorder="0" 
                        allow="autoplay; fullscreen" 
                        allowFullScreen />
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
                <Row className="p-4">
                    <Col xs={12} md={6} className="text-left">
                        <h4 className="titulo-proyecto-modal">
                            {proyecto.titulo}
                        </h4>
                    </Col>
                    <Col xs={12} md={6} className="text-left text-md-right video-options">
                        <span 
                        onClick={() => this.setState({ videoOption: "trailer" })} 
                        className={this.state.videoOption === "trailer" ? "active" : ""}>TRAILER</span>

                        <span className="px-2">|</span>

                        <span 
                        onClick={() => this.setState({ videoOption: "tvSpot" })} 
                        className={this.state.videoOption === "tvSpot" ? "active" : ""}>TV SPOT</span>

                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
  }
}

