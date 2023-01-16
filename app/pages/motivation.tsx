import MainPageContainer from "../components/Container/MainPageContainer";
import HeadCustom from "../components/Head/CustomHead";
import MotivationPageContent from "../components/MotivationComponents/MotivationPageContent";

export default function Motivation() {
	return (
		<>
			<HeadCustom />
			<MainPageContainer MainContent={MotivationPageContent}/>
		</>
	);
}