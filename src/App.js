import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Cats from "./pages/Cats/Cats";
import Dogs from "./pages/Dogs/Dogs";
import Fish from "./pages/Fish/Fish";

import Home from "./pages/Home/Home";
import SmallAnimals from "./pages/SmallAnimals/SmallAnimals";
import "./styles/main.sass";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<div className="is-main-fonts">
				<Home />
			</div>
		)
	},
	{
		path: "/dogs",
		element: (
			<div className="is-main-fonts">
				<Dogs />
			</div>
		)
	},
	{
		path: "/cats",
		element: (
			<div className="is-main-fonts">
				<Cats />
			</div>
		)
	},
	{
		path: "/fish",
		element: (
			<div className="is-main-fonts">
				<Fish />
			</div>
		)
	},
	{
		path: "/small-animals",
		element: (
			<div className="is-main-fonts">
				<SmallAnimals />
			</div>
		)
	}
]);

function App() {
	return <RouterProvider router={router}/>
}

export default App;
