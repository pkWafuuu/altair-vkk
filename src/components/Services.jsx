import { serviceInfo } from '../services'
import ServicesCard from './ui/ServicesCard';

function Services() {
  return (
    <section id="services">
			<div className="container">
				<div className="row">
					<h3 className="section__sub-title">Our Services</h3>
					<h2 className="section__title">
						The various services we provide to make your <br/>business more powerful
					</h2>
					<div className="service__container">
							{serviceInfo.map((service) => <ServicesCard service={service} key={service.id}/> )}
					</div>
				</div>
			</div>
    </section>
  );
}

export default Services;
