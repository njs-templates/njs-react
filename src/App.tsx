import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import Other from "./routes/Other";
import "./App.css";

function App() {
	return (
		<main>
			<div>
				<NavBar />
			</div>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/other"
					element={<Other />}
				/>
			</Routes>
		</main>
	);
}

export default App;
