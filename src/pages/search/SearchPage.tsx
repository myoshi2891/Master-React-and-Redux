import { useLoaderData } from "react-router-dom";
import PackageListItem from "../../components/PackageListItem";
import type { SearchLoaderResult } from "./searchLoader";

export default function SearchPage() {
	const { searchResults } = useLoaderData() as SearchLoaderResult;

	const renderedResults = searchResults.map((result) => {
		return <PackageListItem pack={result} key={result.name} />;
	});

	return (
		<div>
			<h1 className="text-2xl font-bold my-6">SearchPage</h1>
			<div className="space-y-4 mt-4">{renderedResults}</div>
		</div>
	);
}
