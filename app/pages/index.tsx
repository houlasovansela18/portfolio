import MainPageContainer from "../components/Container/MainPageContainer";
import HomePageContent from "../components/HomeComponents/HomePageContent";
import HeadCustom from "../components/Head/CustomHead";

export default function Home() {
	return (
		<>
			<HeadCustom />
			<MainPageContainer MainContent={HomePageContent} />
		</>
	);
}
