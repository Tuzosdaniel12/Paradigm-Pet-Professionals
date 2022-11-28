import React, { useState } from "react";
import Header from "../../components/Header/Header";
import HeaderBody from "../../components/Hero/HeroBody";
import MainContent from "../../components/MainContent/MainContent";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal.js";

import Bird from "../../images/bird1.jpg";
import Dog from "../../images/dog1.jpg";
import Cat from "../../images/cat1.jpg";
import Fish from "../../images/fish1.jpg";
import SmallAnimals from "../../images/ferret1.jpg";

const Home = () => {
	const [isOpen, setOpen] = useState(false);

	const handleOpen = () => {
		console.log(isOpen);
        setOpen(!isOpen);
	};

	const imagesArray = [
		{
			image: () => Bird,
			alt: "Bird Image",
			title: "Birds",
			href: "/dogs"
		},
		{
			image: () => Dog,
			alt: "Dog Image",
			title: "Dogs",
			href: "/dogs"
		},
		{
			image: () => Cat,
			alt: "Cat Image",
			title: "Cats",
			href: "/cats"
		},
		{
			image: () => SmallAnimals,
			alt: "Small Animals Image",
			title: "Small Animals",
			href: "/small-animals"
		},
		{
			image: () => Fish,
			alt: "Fish Image",
			title: "Fish",
			href: "/fish"
		}
	];

	return (
		<div>
			<div className="hero is-primary is-large">
				<Header setOpen={handleOpen} />
				<HeaderBody />
			</div>
			<MainContent title="About Us" imagesArray={imagesArray}>
				<p>
					Pets are nature's gift to humanity. It has been
					scientifically proven that opening our homes and hearts to a
					pet increases our longevity and improves our overall quality
					of life as well as the lives of our pets. At Pet Paradigm
					Professionals, our mission is to offer resources to help you
					care for your furry, scaly, feathery, and slimy loved ones.
					Our pet experts—or “Pexperts”—have been working with pet
					owners and professionals alike for the past twelve years.
					They offer one-on-one consultations with current and
					prospective pet owners as well as group presentations
					designed for veterinary, pet shelter, and pet breeding
					professionals
				</p>
				<p className="pt-1">
					Looking for basic pet care advice for the most common type
					of pets? Need additional help determining which type of pet
					is right for you and your family? We will work with you and
					provide tailored evidence-based pet care to ensure lifelong
					health and wellness of your new companion.
				</p>
			</MainContent>
			<section className="container p-6">
				<h2 className="title">Adoption</h2>
				<p className="">
					Looking for basic pet care advice for the most common type
					of pets? Need additional help determining which type of pet
					is right for you and your family? We will work with you and
					provide tailored evidence-based pet care to ensure lifelong
					health and wellness of your new companion.
				</p>

				<ul className="pt-3 pb-3">
					<li>
						<Link href="https://theshelterpetproject.org/">
							• General Adoption Resources
						</Link>
					</li>
					<li>
						<Link href="https://www.aspca.org/">• ASPCA</Link>
					</li>
					<li>
						<Link href="https://www.sterlingshelter.org/humane-society/koi-fish-rescue/">
							• Fish Rescue
						</Link>
					</li>
					<li>
						<Link href="https://savethesnakes.org/snakerescuecall/">
							• Snake Rescue
						</Link>
					</li>
					<li>
						<Link href="https://ftlob.rescuegroups.org/">
							• Bird Rescue
						</Link>
					</li>
				</ul>

				<p className="">
					We are also happy to help you navigate the adoption process!
					We will guide you through each step in the process from
					determining which type of pet is best suited for your family
					and home environment, to completing the necessary paperwork,
					to bringing your new loved one home. Please fill out our
					contact form to request a consultation. We will contact you
					within 48 hours to schedule a consultation. All fields are
					required.
				</p>
			</section>
			<Footer />
			<Modal  isOpen={isOpen} setOpen={handleOpen} />
		</div>
	);
};

export default Home;
