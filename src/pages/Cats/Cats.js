import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal.js";
import MainContent from "../../components/MainContent/MainContent";
import Cat1 from "../../images/cat1.jpg";
import Cat2 from "../../images/cat2.jpg";
import Cat3 from "../../images/cat3.jpg";
import Cat4 from "../../images/cat4.jpg";
import Cat5 from "../../images/cat5.jpg";

const Cats = () => {
	const [isOpen, setOpen] = useState(false);

	const handleOpen = () => {
		console.log(isOpen);
		setOpen(!isOpen);
	};

	const imagesArray = [
		{
			image: () => Cat1,
			alt: "Cats playing",
			title: "Cats",
			href: "/cats"
		},
		{
			image: () => Cat2,
			alt: "Cat on the stairs",
			title: "Cats",
			href: "/cats"
		},
		{
			image: () => Cat3,
			alt: "Beautiful black cat",
			title: "Cats",
			href: "/cats"
		},
		{
			image: () => Cat4,
			alt: "Cat on the garden",
			title: "Cats",
			href: "/cats"
		},
		{
			image: () => Cat5,
			alt: "Cat sitting down on the couch.",
			title: "Cats",
			href: "/cats"
		}
	];

	return (
		<div>
			<div className="hero is-primary is-large">
				<Header setOpen={handleOpen} />
			</div>
			<MainContent title="Cats" imagesArray={imagesArray}>
				<p>
					Cats were first domesticated around 7500 BCE in the western
					Asia region and are currently the second most popular
					domestic pet in the United States. While there are over 60
					unique documented cat breeds, care and diet can differ
					between breeds. However, some diets and practices are
					generally recommended for the well-being of your fluffy
					family member regardless of breed.
				</p>
			</MainContent>
			<section className="container px-6">
				<h2 className="title">Zero to Four Weeks</h2>
				<p className="">
					It is important the queen (a term commonly used for a female
					cat that is either pregnant or nursing) directly nurse her
					young if possible. Monitor your kitten’s growth closely to
					make sure its growth rate is progressing steadily. If any
					kitten is not growing at a sufficient rate, a caretaker
					might need to feed the kitten directly either with a bottle
					or a feeding tube. Some reasons why kittens might not gain
					weight appropriately include the following
				</p>
				<ul>
					<li>
						• too many other siblings are competing for mom's milk
					</li>
					<li>• gastrointestinal disease</li>
					<li>
						• environmental conditions such as extreme heat or cold,
						or unsanitary conditions
					</li>
				</ul>
			</section>
			<section className="container px-6 pt-5">
				<h2 className="title">Four Weeks to One Year</h2>
				<p className="">
					Kittens can start being introduced to soft wet kitten food
					typically around three to four weeks after birth. According
					to the{" "}
					{
						<a href="https://www.aspca.org/pet-care/cat-care/cat-nutrition-tips">
							ASPCA
						</a>
					}{" "}
					, kittens at this age should eat half to one cup of dry
					kitten food or six to nine ounces of wet kitten food per
					day. If your kitten has difficulties eating hard food, a
					small amount of water can be added to soften the food. Cat
					food that is optimized for kittens provides the additional
					nutrients that are needed for growth, energy, and wellness.
					Depending on the breed, your cat may have different dietary
					requirements. You should always consult with your
					veterinarian for recommendations.
				</p>
			</section>
			<section className="container px-6 pt-5">
				<h2 className="title">One Year to Seven Years</h2>
				<p className="">
					This age is when kittens reach the cat stage and do not need
					as many nutrients. At this age, their level of activity
					decreases, and so does their metabolism. It is not
					recommended to leave food out for the cats all day. Instead,
					provide food a couple times a day so they eat meals rather
					than snacking throughout the day. This practice reduces the
					risk of obesity and other weight-related feline ailments.
				</p>
			</section>
			<section className="container px-6 pt-5 pb-6">
				<h2 className="title">Seven Years and More</h2>
				<p className="">
					Much like many living organisms, the body begins to
					deteriorate and experience a lot of changes. Cats at this
					age should eat less fats and calories and more quality
					proteins. This means when you are purchasing packaged foods
					for your cat, look for food that states a particular protein
					(such as "salmon") and not just a category (such as fish).
					This usually means they are byproducts, or combinations, of
					lesser quality proteins.
				</p>
			</section>
			<Footer />
			<Modal isOpen={isOpen} setOpen={handleOpen} />
		</div>
	);
};

export default Cats;
