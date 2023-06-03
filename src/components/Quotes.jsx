import Slider from "react-slick";
import Quote from "./ui/Quote";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Quotes() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="quotes">
      <div className="container">
        <div className="row__quote">
          <Slider {...settings} >
            <Quote
              quote="We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority."
              name="Mark Garfield"
              position="CEO & Head of Product"
            />
            <Quote
              quote="We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority."
              name="Mark Garfield"
              position="CEO & Head of Product"
            />
            <Quote
              quote="We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority."
              name="Mark Garfield"
              position="CEO & Head of Product"
            />
            <Quote
              quote="We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority."
              name="Mark Garfield"
              position="CEO & Head of Product"
            />
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Quotes;
