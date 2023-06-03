import { FaArrowRight } from 'react-icons/fa'

function ServicesCard({ service }) {

	return (
		<div className="service-card--wrapper">
			<div className="service-card">
				<div className="service__icon" style={{backgroundColor: `${service.color}`}}>
					<img src={service.icon} alt="" className='service__icon--img' />
				</div>
				<div className="service__title">{service.title}</div>
				<p className="service__para">{service.paragraph}</p>
				<button className="service__btn"><FaArrowRight/></button>
			</div>
		</div>
	)
}

export default ServicesCard