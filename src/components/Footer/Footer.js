import React from 'react'
import { Link } from "react-router-dom";
export default function Footer() {
  return (
		<footer className="footer p-6">
			<div className="container px-6">
				<div className="columns">
					<div class="column">
						<h3>Pets</h3>
						<ul className="pt-3 pb-3">
							<li>
								<Link to="/">• Home</Link>
							</li>
							<li>
								<Link to="/dogs">• Dogs</Link>
							</li>
							<li>
								<Link to="/cats">• Cats</Link>
							</li>
							<li>
								<Link to="/fish">• Fish</Link>
							</li>
							<li>
								<Link to="/small-animals">• Small Animals</Link>
							</li>
							{/* <li>
								<Link href="https://ftlob.rescuegroups.org/">
									• Bird Rescue
								</Link>
							</li> */}
						</ul>
					</div>
					<div class="column">
						<p>Paradigm Pet Professionals</p>
						<p>1234 Main St E</p>
						<p>Somewhere, ST 98999</p>
						<Link href="tel:(123)456-7890">
							Customer Support: (123)456-7890
						</Link>
					</div>

					<div class="column">
						<h5>Privacy Policy</h5>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Illo commodi mollitia eligendi quidem.
							Inventore, sint. Rerum quas in odit vitae, assumenda
							nostrum tempore sequi accusamus neque dicta
							recusandae? Eaque, ex?
						</p>
						<p>Copyright 2022</p>
					</div>
				</div>
			</div>
		</footer>
  );
}
