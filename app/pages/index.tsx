import Head from "next/head";
import TopNavbar from "../components/Navbar/TopNavbar";
import { useState, useEffect } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import Rainbow from "../components/Stylish/Rainbow";

// import { Inter } from "@next/font/google";
// import Image from "next/image";

// const inter = Inter({ subsets: ["latin"] });

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
				<div className="h-screen bg-zinc-900 dark:bg-black text-white font-mono relative">
					<DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
						<TopNavbar />
						<Rainbow />
					</DarkModeContext.Provider>
				</div>
			</main>
		</>
	);
}
