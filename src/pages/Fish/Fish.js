import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal.js";
import MainContent from "../../components/MainContent/MainContent";
import Fish1 from "../../images/fish1.jpg";
import Fish2 from "../../images/fish2.jpg";


const Fish = () => {
	const [isOpen, setOpen] = useState(false);

	const handleOpen = () => {
		console.log(isOpen);
		setOpen(!isOpen);
	};

	const imagesArray = [
		{
			image: () => Fish1,
			alt: "Blue fish",
			title: "Fish",
			href: "/fish"
		},
		{
			image: () => Fish2,
			alt: "Goldfish",
			title: "Fish",
			href: "/fish"
		}
	];

	return (
		<div>
			<div className="hero is-primary is-large">
				<Header setOpen={handleOpen} />
			</div>
			<MainContent title="Fish" imagesArray={imagesArray}>
				<p>
					Fish represent a broad class of aquatic animals that can
					live in fresh or saltwater, depending on the species.
					Bringing fish into your home can be an exciting hobby,
					especially if you intend to breed them, and the presence of
					a fish tank in your home can induce feelings of peace and
					tranquility.
				</p>
				<p className="pt-5">
					Whether you are bringing your fish home for the first time
					or maintaining your aquarium, it is important to test your
					water once per week to ensure it is free from toxins that
					can harm your fish.
				</p>
			</MainContent>
			<section className="container px-6">
				<h2 className="title">Freshwater Fish</h2>
				<p className="">
					There are several freshwater fish to choose from when
					setting up your aquarium, but it is best to consult with a
					“Pexpert” to ensure your fish will get along! No matter the
					species, ensure your fish are suited for a freshwater
					environment by investing in a water testing kit. Follow
					these general water chemistry guidelines to ensure your fish
					will adapt well to your aquarium and avoid ingesting toxins
					that can harm or kill your fish:
				</p>
				<ul className="pt-3">
					<li>• pH Level: 6.8–7.6 (7.0 is considered neutral)</li>
					<li>• Ammonia: any level above zero is harmful to fish</li>
					<li>• Nitrates: 5 to 10 ppm</li>
					<li>• Nitrites: less than 0.5 ppm</li>
				</ul>
			</section>
			<section className="container px-6 pt-5 pb-6">
				<h2 className="title">Saltwater Fish</h2>
				<p className="">
					Saltwater fish also offer several options when it comes to
					choosing among species for your aquarium. As with freshwater
					fish, consult with a “Pexpert” to ensure your fish will get
					along are suited for a saltwater environment. Following
					these general guidelines to avoid dangerous water conditions
					and ensure the appropriate salinity level for your fishies:
				</p>
				<ul className="pt-3">
					<li>• Salinity: 1.020–1.028 sg</li>
					<li>• pH Level: 7.6–8.4 (7.0 is considered neutral)</li>
					<li>
						• Ammonia: any level above 0.1 ppm requires attention
					</li>
					<li>• Nitrates: 10 to 40 ppm</li>
					<li>• Nitrites: less than 0.2 ppm</li>
				</ul>
				<p className="pt-3">
					For more information on making your tap water safe for your
					fish, please visit:{" "}
					<a href="http://www.theaquariumwiki.org/wiki/How_to_make_tap_water_safe_for_fish
					http://fishbase.org/home.htm">How to make tap war safe for fish</a>
				</p>
			</section>
			<Footer />
			<Modal isOpen={isOpen} setOpen={handleOpen} />
		</div>
	);
};

export default Fish;
