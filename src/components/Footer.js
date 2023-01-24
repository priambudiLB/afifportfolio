import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            .af
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/afiffasya/"><img src={navIcon1} target="_blank" title="linkedin" /></a>
              <a href="https://www.facebook.com/ga.dha.3"><img src={navIcon2} target="_blank" title="facebook" /></a>
              <a href="https://www.instagram.com/afif_fasya/"><img src={navIcon3} target="_blank" title="instagram" /></a>
              <a href="https://github.com/Afiffasya"><img src={navIcon4} target="_blank" title="github" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
