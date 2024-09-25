import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/search/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
				loader: async ({ request }) => {
					const { searchParams } = new URL(request.url);
					const term = searchParams.get("term");

					if (!term) {
						throw new Error("Search term must be provided");
					}

				},
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
