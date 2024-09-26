import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import Root from "./pages/Root";
import { searchLoader } from "./pages/search/searchLoader";
import SearchPage from "./pages/search/SearchPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/search",
				element: <SearchPage />,
				loader: searchLoader,
			},
			{
				path: "/packages/:name",
				element: <DetailsPage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
