import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal.js";
import MainContent from "../../components/MainContent/MainContent";
import Small1 from "../../images/ferret1.jpg";
import Small2 from "../../images/guineapig1.jpg";

const SmallAnimals = () => {
	const [isOpen, setOpen] = useState(false);

	const handleOpen = () => {
		console.log(isOpen);
		setOpen(!isOpen);
	};

	const imagesArray = [
		{
			image: () => Small1,
			alt: "Ferret",
			title: "Ferret",
			href: "/small-animals"
		},
		{
			image: () => Small2,
			alt: "Guinea Pig",
			title: "Guinea Pig",
			href: "/small-animals"
		}
	];

	return (
		<div>
			<div className="hero is-primary is-large">
				<Header setOpen={handleOpen} />
			</div>
			<MainContent title="Small Pets" imagesArray={imagesArray}>
				<p>
					Sometimes we want a pet in our life but think it’s
					impossible because we are not home enough to take care of
					it, or we don’t have enough room. Consider adopting a small
					animal such as a hermit crab, mouse, gerbil, hamster, guinea
					pig, or even a chinchilla! Depending on which type of animal
					you adopt, you can provide a comfortable environment using
					anything from small to large cages or glass aquariums. You
					will also need to provide amenities for your new pet, such
					as bedding or substrate, toys, an exercise wheel, a water
					dish or drip bottle, a food dish, and grooming equipment.
					You also need to consider if your new pet will need a friend
					or if it will be happy living alone. Our “Pexperts” are here
					to help you decide which pet is right for you and how to
					provide them with a happy home. Schedule a consultation with
					us today!
				</p>
			</MainContent>
			<section className="container p-6">
				<h2 className="title">
					Here are some resources to get you started
				</h2>
				<ul className="pt-1">
					<li>
						<a href="https://www.animalhumanesociety.org/adoption/guinea-pig-care">
							• Guinea Pig Care
						</a>
					</li>
					<li>
						<a href="https://www.bluecross.org.uk/pet-advice/caring-your-mouse">
							• Mouse Care
						</a>
					</li>
					<li>
						<a href="https://chinchillacare.org/cage-habitat/">
							• Chinchilla Care
						</a>
					</li>
					<li>
						<a href="https://petgerbils.org/cage-habitat/">
							• Gerbil Care
						</a>
					</li>
					<li>
						<a href="https://www.pdsa.org.uk/taking-care-of-your-pet/looking-after-your-pet/small-pets/the-ideal-home-for-your-hamster">
							• Hamster Care:
						</a>
					</li>
				</ul>
			</section>
			<Footer />
			<Modal isOpen={isOpen} setOpen={handleOpen} />
		</div>
	);
};

export default SmallAnimals;
