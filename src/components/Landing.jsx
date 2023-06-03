import  blob1  from '../assets/blob-1.png'
import  blob2  from '../assets/blob-2.png'
import { BsArrowRight } from 'react-icons/bs'

function Landing() {
  return (
    <section id="landing">
      <div className="row">
        <div className="landing__container">
          <div className="landing__content">
            <h1 className="landing__title">
              Make your business{" "}
              <span style={{ color: "#FF6800" }}>more powerful</span><br/> with us
            </h1>
            <p className='landing__para'>
              We provide various services to make your business grow and get
              bigger. Your satisfaction is our first priority.
            </p>
						<button className="landing__button">Get Started <BsArrowRight className='btn__arrow' /></button>
          </div>
					<div className="landing__img--container">
						<img src={blob1} alt="blob" className="blob1"/>
						<img src={blob2} alt="blob" className="blob2"/>
					</div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
