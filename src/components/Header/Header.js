/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../images/title.png";
import { FaSearch, FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ setOpen }) => {
	const path = window.location.href.split("/").pop();

	function toggleBurgerMenu() {
		document.querySelector(".navbar-menu").classList.toggle("is-active");
	}

	return (
		<header className="hero-head is-height">
			<nav className="navbar is_height is-primary has-text-info">
				<div className="container is_height">
					<div className="navbar-brand is_height">
						<Link to="/" className="navbar-item is_height mt-2">
							<img src={logo} alt="Paradigm Pet Professionals" />
						</Link>
						<a
							role="button"
							onClick={toggleBurgerMenu}
							className="navbar-burger"
							data-target="navbarMenuHeroB">
							<span></span>
							<span></span>
							<span></span>
						</a>
					</div>
					<div id="navbarMenuHeroB is-active" className="navbar-menu">
						<div className="navbar-end">
							<Link
								className={`navbar-item ${
									path === "" && "is-active"
								}`}
								to="/">
								Home
							</Link>
							<Link
								className={`navbar-item ${
									path === "dogs" && "is-active"
								}`}
								to="/dogs">
								Dogs
							</Link>
							<Link
								className={`navbar-item ${
									path === "cats" && "is-active"
								}`}
								to="/cats">
								Cats
							</Link>
							<Link
								className={`navbar-item ${
									path === "fish" && "is-active"
								}`}
								to="/fish">
								Fish
							</Link>
							<Link
								className={`navbar-item ${
									path === "small-animals" && "is-active"
								}`}
								to="/small-animals">
								Small Animals
							</Link>
							{/* <Link
								className={`navbar-item ${
									path === "birds" && "is-active"
								}`}
								to="/birds">
								Birds
							</Link> */}
							<span className="navbar-item">
								<div className="control has-icons-left has-icons-right">
									<input
										className="input is-small"
										type="Search"
										placeholder="Search"
									/>
									<span className="icon is-medium is-right">
										<FaSearch />
									</span>
								</div>
							</span>
							<span className="navbar-item">
								<div className="control has-icons-left has-icons-right ">
									<button
										className="button has-text-info is-small is-outlined is-inverted"
										onClick={() => setOpen()}>
										<span>Questions</span>
										<FaQuestion />
									</button>
								</div>
							</span>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
