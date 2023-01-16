import Head from "next/head";
import ResponsiveBodyContainer from "../components/Container/ResponsiveBodyContainer";
import TopNavbar from "../components/Navbar/TopNavbar";
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Home() {
	const {darkMode, setDarkMode} = useContext(DarkModeContext)
	const isDarkMode = darkMode === "dark"
	return (
		<>
			<Head>
				<title>Houla Sovansela - AKA - GODDA</title>
				<meta
					name="description"
					content="software developer, portfolio, resume and job seeking..."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/code.png" />
			</Head>
			<main className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} flex flex-col h-full w-full absolute`}>
				<div className="flex-none">
					<TopNavbar />
				</div>
				<div className="flex-1">
					<ResponsiveBodyContainer />
				</div>
			</main>
		</>
	);
}
