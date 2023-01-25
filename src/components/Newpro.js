import Carousel from 'react-bootstrap/Carousel';
import afsyatv1 from "../assets/img/afsyatv1.png";
import afsyatv2 from "../assets/img/afsyatv2.png";
import afsyatv3 from "../assets/img/afsyatv3.png";
import afsyatv4 from "../assets/img/afsyatv4.png";
import 'animate.css';

export const Projectt = () => {
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
    }
    return (
        <div className='prj' id='projects'>
        <h1>Project</h1>
        <h4>Mini Project responsive website from dibimbing.id built using HTML/CSS and bootstrap</h4>
      <Carousel responsive={responsive} infinite={true} className="prj-slider">
        <Carousel.Item>
          <img
            src={afsyatv1}
            alt=" "
          />
          <h5 className='detail'>homepage: Navbar-Alert-Carousel-Breadcrumbs
          </h5>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={afsyatv2}
            alt=" "
          />
          <h5 className='detail'>Form Login
          </h5>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={afsyatv3}
            alt=" "
          />
          <h5 className='detail'>Card: When clicking the card, a modal will appear with the full image of product
          </h5>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={afsyatv4}
            alt=" "
          />
          <h5 className='detail'>footer:
          </h5>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
