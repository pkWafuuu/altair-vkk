import quoteImg from "../../assets/Excludequote.svg"

function Quote({ quote, name, position }) {
	return (
		<div className="quote__container">
			<img src={quoteImg} alt="" className="quote__img" />
			<p className="quote__content">{quote}</p>
			<div className="quote__person--container">
				<div className="quote__person--name">{name}</div>
				<div className="quote__person--position">{position}</div>
			</div>
		</div>
	)
}

export default Quote