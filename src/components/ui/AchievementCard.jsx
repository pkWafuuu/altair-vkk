
function AchievementCard({ title, color, para }) {
	return (
		<div className="achieve__card--wrapper">
			<div className="achieve__card">
				<div className="achieve__title" style={{color: `${color}`}}>
					{title}
				</div>
				<p className="achieve__para">{para}</p>
			</div>
		</div>
	)
}

export default AchievementCard