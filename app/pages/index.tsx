import Head from "next/head";
import { useState, useEffect } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import ResponsiveBodyContainer from "../components/Container/ResponsiveBodyContainer";
import TopNavbar from "../components/Navbar/TopNavbar";

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
				<link rel="icon" href="/logo.png" />
			</Head>
			<main className={darkMode}>
				<div className="h-screen bg-white dark:bg-black text-black dark:text-white relative">
					<DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
						<TopNavbar />
						<ResponsiveBodyContainer />
					</DarkModeContext.Provider>
				</div>
			</main>
		</>
	);
}
