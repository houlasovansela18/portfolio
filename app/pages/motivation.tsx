import dynamic from "next/dynamic";
const DynamicMainPageContainer = dynamic(
	() => import("../components/Container/MainPageContainer")
);
const DynamicHeadCustom = dynamic(
	() => import("../components/Head/CustomHead")
);
import MotivationPageContent from "../components/MotivationComponents/MotivationPageContent";

export default function Motivation() {
	return (
		<>
			<DynamicHeadCustom />
			<DynamicMainPageContainer MainContent={MotivationPageContent}/>
		</>
	);
}