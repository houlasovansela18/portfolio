import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Comfortaa } from "@next/font/google";
import { useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const comfortaa = Comfortaa({
	subsets: ["latin"],
	variable: "--font-comfortaa",
});

export default function App({ Component, pageProps }: AppProps) {
	const [darkMode, setDarkMode] = useState("dark");
	return (
		<main className={`${comfortaa.variable} font-sans ${darkMode}`}>
			<DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
				<Component {...pageProps} />
			</DarkModeContext.Provider>
		</main>
	);
}
