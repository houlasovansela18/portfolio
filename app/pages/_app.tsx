import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Comfortaa } from "@next/font/google";

const comfortaa = Comfortaa({
	subsets: ["latin"],
	variable: "--font-comfortaa",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${comfortaa.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	);
}
