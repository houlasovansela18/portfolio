import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Comfortaa } from "@next/font/google";
import { ThemeProvider } from "../context/ThemeContext";

const comfortaa = Comfortaa({
	subsets: ["latin"],
	variable: "--font-comfortaa",
});

export default function App({ Component, pageProps }: AppProps) {
	
	return (
		<ThemeProvider>
			<main className={`${comfortaa.variable} font-sans`}>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}
