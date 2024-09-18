import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
	name: "song",
	initialState: [],
	reducers: {
		addSong(state, action) {
			state.push(action.payload);
		},
		removeSong(state, action) {},
	},
});

const store = configureStore({
	reducer: {
		songs: songsSlice.reducer,
	},
});

// console.log(songsSlice.actions.addSong("Some song!"));

const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch(songsSlice.actions.addSong("Test"));

const finalState = store.getState();
console.log(JSON.stringify(finalState));