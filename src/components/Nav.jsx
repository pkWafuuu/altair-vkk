// eslint-disable-next-line

function Nav() {
	return (
		<nav>
			<div className="nav__row">
				<div className="nav__logo">vkk</div>
				<ul className="nav__links">
					<li>
						<a href="/#" rel="noopener noreferrer" className="nav__link">Home</a>
					</li>
					<li>
						<a href="/#" rel="noopener noreferrer" className="nav__link">Works</a>
					</li>
					<li>
						<a href="/#" rel="noopener noreferrer" className="nav__link">About</a>
					</li>
				</ul>
				<button className="nav__contact">Contact Us</button>
			</div>
		</nav>
	)
}

export default Nav