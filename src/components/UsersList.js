import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

function UsersList() {
	const [isLoadingUsers, setIsLoadingUsers] = useState(false);
	const [isLoadingUsersError, setIsLoadingUsersError] = useState(null);

	const dispatch = useDispatch();
	const { data } = useSelector((state) => {
		return state.users;
	});

	useEffect(() => {
		setIsLoadingUsers(true);
		dispatch(fetchUsers())
			.unwrap()
			.then(() => {})
			.catch(() => {});
	}, [dispatch]);

	function handleUserAdd() {
		dispatch(addUser());
	}

	if (isLoadingUsers) {
		return <Skeleton times={6} className="h-10 w-full" />;
	}

	if (isLoadingUsersError) {
		return <div>Error fetching data...</div>;
	}

	const renderdUsers = data.map((user) => {
		return (
			<div key={user.id} className="mb-2 border rounded">
				<div className="flex p-2 justify-between items-center cursor-pointer">
					{user.name}
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="flex flex-row justify-between m-3">
				<h1 className="m-2 text-xl">Users</h1>
				<Button onClick={handleUserAdd}>+ Add User</Button>
			</div>
			{renderdUsers}
		</div>
	);
}

export default UsersList;
