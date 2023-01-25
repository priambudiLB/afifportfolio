import { Container, Row, Col } from "react-bootstrap";
import contact from "../assets/img/contact.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon6 from '../assets/img/nav-icon6.svg';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contact} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col className="tc" size={12} md={4}>
            <h2>Get In Touch</h2>
              <Row>
                <Col>
                  <div className="touch">
                    <a href="https://www.linkedin.com/in/afiffasya/"><img src={navIcon1} target="_blank" title="linkedin" alt="" /></a>
                    <p>linkedin</p>
                  </div>
                  <div className="touch">
                    <a href="https://wa.me/6281279143840"><img src={navIcon5} target="_blank" title="linkedin" alt="" /></a>
                    <p>WhatsApp</p>
                  </div>
                  <div className="touch">
                    <a href="https://www.instagram.com/afif_fasya/"><img src={navIcon3} target="_blank" title="linkedin" alt="" /></a>
                    <p>Instagram</p>
                  </div>
                  <div className="touch">
                    <a href="https://github.com/Afiffasya/"><img src={navIcon4} target="_blank" title="linkedin" alt="" /></a>
                    <p>Github</p>
                  </div>
                  <div className="touch">
                    <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=afiffasya18@gmail.com"><img src={navIcon6} target="_blank" title="linkedin" alt="" /></a>
                    <p>Email</p>
                  </div>
                </Col>
              </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
