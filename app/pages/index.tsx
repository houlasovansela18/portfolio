import dynamic from "next/dynamic";
const DynamicMainPageContainer = dynamic(
	() => import("../components/Container/MainPageContainer")
);
const DynamicHeadCustom = dynamic(
	() => import("../components/Head/CustomHead")
);
import HomePageContent from "../components/HomeComponents/HomePageContent";

export default function Home() {
	return (
		<>
			<DynamicHeadCustom />
			<DynamicMainPageContainer MainContent={HomePageContent} />
		</>
	);
}
