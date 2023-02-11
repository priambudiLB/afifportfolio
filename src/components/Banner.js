import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import header from "../assets/img/header.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 50);
  const [, setIndex] = useState(1);
  const toRotate = ["Front End Enthusiast", "Web Developer"];
  const period = 1000;


  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(150);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta]);
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility responsive={responsive} infinite={true}>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Afif Fasya`}{" "}
                    <br></br>
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Front End Enthusiast", "Web Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Graduated from Raden Fatah Islamic University in 2022, i'm
                    currently taking a front end web development bootcamp at
                    dibimbing.id. Passionate about building a dynamic web page,
                    relevant skills in web development including HTML/CSS,
                    Bootstrap, Javascript, Git and ReactJS. Have excellent
                    interpersonal skills, agile, and eager to learn
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={header} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <div class="static-container">
            <div class="std">
              <p class="work">
                From 2018 to 2020 I was{" "}
                <strong class="wrk">
                  Surveyor<br></br>
                </strong>
                @
                <a
                  href="https://www.nielsen.com/id/about-us/locations/indonesia/"
                  title="Visit Nielsen website"
                >
                  Nielsen The Company Indonesia
                </a>
                .
              </p>
              <p>
                a global leader in audience measurement, data and analytics, who
                are shaping the future of media<br></br> in Indonesia. Learn
                more about our local offerings.
              </p>
            </div>
          </div>
          <div class="static-container">
            <div class="std">
              <p class="work">
                From 2021 to 2022 I was{" "}
                <strong class="wrk">
                  Honorer<br></br>
                </strong>
                @
                <a
                  href="https://pa-palembang.go.id/"
                  title="Visit Pengadilan website"
                >
                  Pengadilan Agama
                </a>
                .
              </p>
              <p>
                The Religious Court, which is the Court of First Instance, has
                the duty and authority to examine,<br></br> decide and resolve
                cases at the first level between people who are Muslim in the
                field of marriage,<br></br> inheritance, wills and grants made
                under Islamic law, as well as waqf and shadaqah
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};
