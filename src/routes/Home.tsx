import React from "react";
import useCount from "../store/count";
import reactLogo from "../assets/react.svg";

function Home() {
	const count = useCount((state: any) => state.count);
	const increase = useCount((state: any) => state.increase);

	return (
		<div className="App">
			<div className="main-content">
				<a
					href="https://vitejs.dev"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="/vite.svg"
						className="logo"
						alt="Vite logo"
					/>
				</a>
				<a
					href="https://reactjs.org"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<div className="grid grid-cols-1 justify-items-center space-y-5">
				<h1>Vite + React + TypeScript</h1>
				<button
					className="btn btn-primary"
					onClick={increase}
				>
					count is {count}
				</button>
				<p>
					This page works with any Daisy UI theme! Try it out and
					change <code>daisyui.themes</code> in{" "}
					<code>tailwind.config.cjs</code>.
				</p>
				<p>
					Check out{" "}
					<a
						className="link"
						href="https://github.com/njs-templates"
						target="_blank"
						rel="noreferrer"
					>
						NJS Templates
					</a>{" "}
					and{" "}
					<a
						className="link"
						href="https://github.com/vitejs/awesome-vite#templates"
						target="_blank"
						rel="noreferrer"
					>
						Awesome Vite
					</a>{" "}
					for more templates.
				</p>
				<p>
					If you can view both pages, everything should be working, so
					open the README in the root of the directory for your next
					steps and get coding.
				</p>
				<p className="read-the-docs">
					Click on the logos to learn more
				</p>
			</div>
		</div>
	);
}

export default Home;
