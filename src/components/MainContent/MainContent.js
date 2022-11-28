import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";

const MainContent = ({ children, imagesArray, title }) => {
	const [index, setIndex] = useState(0);
	const handleImageChange = (imagePosition) => {
		const arrayOfImagesLength = imagesArray.length;

		let tempIndex = index + imagePosition;

		if (tempIndex < 0) tempIndex = arrayOfImagesLength - 1;

		if (tempIndex > arrayOfImagesLength - 1) tempIndex = 0;

		setIndex(tempIndex);
	};

	return (
		<main className="container p-6">
			<h2 className="title">{title}</h2>
			<div className="columns">
				<div className="column">{children}</div>
				<div className="column is-relative">
					<div className="is-stable-image-width-container">
						<Link to={imagesArray[index].href}>
							<img
								src={imagesArray[index].image()}
								alt={imagesArray[index].alt}
							/>
						</Link>
					</div>
					<div className="is-image-title is-flex is-justify-content-space-between has-text-info">
						<button
							className="button is-small has-text-info"
							onClick={() => handleImageChange(-1)}>
							<FaLessThan />
						</button>
						<h2 className="is-size-5 has-text-info">
							<Link to={imagesArray[index].href}>
								{imagesArray[index].title}
							</Link>
						</h2>
						<button
							className="button is-small has-text-info"
							onClick={() => handleImageChange(1)}>
							<FaGreaterThan />
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default MainContent;
