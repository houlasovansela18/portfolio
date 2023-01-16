import Head from "next/head";
import ResponsiveBodyContainer from "../components/Container/ResponsiveBodyContainer";
import TopNavbar from "../components/Navbar/TopNavbar";

export default function Home() {
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
			<main className="flex flex-col h-full w-full absolute bg-white dark:bg-black text-black dark:text-white">
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
