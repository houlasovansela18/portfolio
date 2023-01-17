import Head from "next/head";
import { useRouter } from "next/router";
import Timer, { FormattedDuration } from "@dbpiper/timer";

export default function HeadCustom() {
	const router = useRouter();
	const pathName = router.pathname.replace("/", "");
	const newPath: string = pathName == "" ? "home" : pathName;
	const titleOption: { [key: string]: string } = {
		home: "Home 🏠",
		note: "Note 📝",
		motivation: "Motivation 🏋🏻‍♀️",
		projects: "Projects 🗂️",
		contact: "Contact 📞",
	};
	const titlePrefix = "Houla Sovansela";
	const title = `${titlePrefix} - ${titleOption[newPath]}`;
	const timer = new Timer();
	return (
		<Head>
			<title>{title}</title>
			<meta
				name="description"
				content="software developer, portfolio, resume and job seeking..."
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link
				rel="icon"
				href="/code.png"
				onLoadStart={() => {
					timer.start();
				}}
				onLoadedDataCapture={() => {
					const formattedDuration = timer.stop();
					console.log(formattedDuration.milliseconds);
				}}
			/>
		</Head>
	);
}
