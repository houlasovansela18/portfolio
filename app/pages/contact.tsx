import ContactPageContent from "../components/ContactComponents/ContactPageContent";
import MainPageContainer from "../components/Container/MainPageContainer";
import HeadCustom from "../components/Head/CustomHead";

export default function Contact() {
	return (
		<>
			<HeadCustom />
			<MainPageContainer MainContent={ContactPageContent} />
		</>
	);
}
