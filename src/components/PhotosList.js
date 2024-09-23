import { useFetchPhotosQuery } from "../store";
import PhotosListItem from "./PhotosListItem";

function PhotosList({ album }) {
	useFetchPhotosQuery(album);
	return (
		<div>
			<PhotosListItem />
		</div>
	);
}

export default PhotosList;
