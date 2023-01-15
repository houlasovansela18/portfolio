import Head from "next/head";
import { useState } from "react";
import ResponsiveBodyContainer from "../components/Container/ResponsiveBodyContainer";
import TopNavbar from "../components/Navbar/TopNavbar";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Home() {
	const [darkMode, setDarkMode] = useState("dark");
	return (
		<>
			<Head>
				<title>Houla Sovansela</title>
				<meta
					name="description"
					content="houla sovansela is a software developer"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/code.png" />
			</Head>
			<main className={darkMode}>
				<div className="flex flex-col h-full w-full absolute bg-white dark:bg-black text-black dark:text-white overflow-hidden">
					<div className="flex-none">
						<DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
							<TopNavbar />
						</DarkModeContext.Provider>
					</div>
					<ResponsiveBodyContainer />
					<div className="flex-1"></div>
				</div>
			</main>
		</>
	);
}
