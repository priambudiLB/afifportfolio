import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const HardSkills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Hard Skills & Tools</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h5>HTML5/CSS3</h5>
                            </div>
                            <div className="item">
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <h5>GIT</h5>
                            </div>
                            <div className="item">
                                <h5>Microsoft Office</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export const SoftSkills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Soft Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h5>Problem Solving</h5>
                            </div>
                            <div className="item">
                                <h5>Public Speaking</h5>
                            </div>
                            <div className="item">
                                <h5>Time Management</h5>
                            </div>
                            <div className="item">
                                <h5>Creative thinking</h5>
                            </div>
                            <div className="item">
                                <h5>Flexibility</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
