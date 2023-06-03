// eslint-disable-next-line

import { useState } from "react"

function Nav() {
	const [theme, setTheme] = useState(false)

	function changeTheme() {
		if(theme === false) {
			document.body.classList += "dark-theme";
			setTheme((prev) => !prev);
		} else {
			document.body.classList.remove("dark-theme");
			setTheme((prev) => !prev);
		}
	}

	return (
		<nav>
			<div className="nav__row">
				<button className="nav__logo" onClick={changeTheme}>vkk</button>
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