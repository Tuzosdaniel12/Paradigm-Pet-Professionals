/* eslint-disable react/no-unescaped-entities */
import logo from "../../images/petshoplogo.png";
import { useWindowDimensions } from "../../utils/useWindowSize.js";
import BackGroundImage from "../BackGroundImage/BackgroundImage";

const HeaderBody = () => {
	const { width } = useWindowDimensions();
	const headerBodyClass = `container ${
		width < 715
			? "is-flex-direction-row pt-6"
			: "is-flex is-justify-content-space-between"
	} `;

	const isSmallScreeNSize = width < 715;
	return (
		<main
			className={`hero-body is-relative ${
				isSmallScreeNSize ? "pt-4 pb-4" : ""
			}`}>
			<BackGroundImage />

			<div className={headerBodyClass}>
				{isSmallScreeNSize ? (
					<div className="is-main-Logo-small-devices">
						<img src={logo} alt="Logo" layout="cover" />
					</div>
				) : (
					<img src={logo} alt="Logo" width="200" height="500" />
				)}

				<h4 className="title p-6">
					"Pets are nature's gift to humanity. It has been
					scientifically proven that opening our homes and hearts to a
					pet increases our longevity and improves our overall quality
					of life as well as the lives of our pets."
				</h4>
			</div>
		</main>
	);
};

export default HeaderBody;
