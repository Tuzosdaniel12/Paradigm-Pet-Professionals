import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal.js";
import MainContent from "../../components/MainContent/MainContent";
import Dog1 from "../../images/dog1.jpg";
import Dog2 from "../../images/dog2.png";
import Dog3 from "../../images/dog3.jpg";
import Dog4 from "../../images/dog4.jpg";

const Dogs = () => {
	const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
		console.log(isOpen);
		setOpen(!isOpen);
	};

	const imagesArray = [
		{
			image: () => Dog1,
			alt: "Dog Smiling",
			title: "Dogs",
			href: "/dogs"
		},
		{
			image: () => Dog2,
			alt: "Dog on the beach",
			title: "Dogs",
			href: "/dogs"
		},
		{
			image: () => Dog3,
			alt: "Dogs waiting to be pet",
			title: "Dogs",
			href: "/dogs"
		},
		{
			image: () => Dog4,
			alt: "Dog fetching",
			title: "Dogs",
			href: "/dogs"
		}
	];

	return (
		<div>
			<div className="hero is-primary is-large">
				<Header setOpen={handleOpen} />
			</div>
			<MainContent title="Dog Care" imagesArray={imagesArray}>
				<p>
					The domestic dog is an extremely social animal and offers a
					diverse variety of choices as there are well over 300 breeds
					recognized by the World Canine Organization. Adopting a dog
					offers mutual benefits between dog and owner. Many studies
					cite the social benefits of having a companion as well as
					the reduced feelings of loneliness from adopting a dog.
					Studies even show medical indicators such as reduced blood
					pressure and improved lipid profiles. If you have a dog, it
					is important to make sure that you care for your dog; be
					mindful of what you feed your dog and provide enough
					opportunities for exercise. In this page, you will find more
					information about how to care for your pets throughout the
					various stages of their lives.
				</p>
			</MainContent>
			<section className="container px-6">
				<h2 className="title">Diet & Exercise</h2>
				<p className="">
					Throughout dogs’ lifespans, they should generally be fed
					fewer meals as they mature. Puppies should be nursed the
					first two months, then introduced to three meals per day
					when they are about three to six months years old. Their
					food intake should be reduced to two meals per day when they
					are six months to one year old and finally reduced to one
					meal after they reach one year old. And a dog’s typical body
					mass is composed of somewhere between 60 and 70 percent
					water. The{" "}
					{
						<a href="https://www.aspca.org/pet-care/dog-care/dog-nutrition-tips">
							ASPCA
						</a>
					}{" "}
					says just a 10 percent decrease in body water can cause
					illness, and a 15 percent loss can cause death, so make sure
					you keep your pooch hydrated!
				</p>
			</section>
			<section className="container px-6 pt-5">
				<h2 className="title">Grooming & Handling</h2>
				<p className="">
					Keeping your furry family member clean is important to its
					health. So be sure to brush frequently to reduce the amount
					of shedding and prevent matted and tangled fur that can
					prove to be extremely difficult to remove. Check for insects
					such as ticks and fleas, especially after visiting heavily
					wooded areas. Bathing is not only important to your dog’s
					health but can be an exercise depending on how strong willed
					the dog is. Rinse all of the soap out, as any residual soap
					can result in a rash. Be sure the soap is formulated for
					your puppy or dog, since harsh soaps can cause allergic
					reactions. And as always, be careful how you handle your
					loved one. No matter the size of your dog, you need to be
					cautious as you carry your canine. If you have a small dog,
					then cradle the pup with one hand under the chest and the
					forearm supporting the back half. If it is a large dog,
					reach under the belly with both your arms perpendicular to
					the dog, and use each arm to support the chest and rear as
					you lift.
				</p>
			</section>
			<section className="container px-6 pt-5 pb-6">
				<h2 className="title">Vaccinations & Medications</h2>
				<p className="">
					You should always consult with your veterinarian, but there
					is a core set of vaccines that are typically recommended.
					Vaccines that reduce the exposure risk to things such as
					hepatitis, rabies, and parvovirus. Others may be determined
					by your vet depending on the environment in which the dog
					resides. Some of these include{" "}
					{
						<a href="https://www.aspca.org/pet-care/general-pet-care/vaccinations-your-pet">
							Bordetella bronchiseptica, Borrelia burgdorferi, and
							Leptospira bacteria
						</a>
					}
					.
				</p>
			</section>
			<Footer />
			<Modal isOpen={isOpen} setOpen={handleOpen} />
		</div>
	);
};

export default Dogs;
