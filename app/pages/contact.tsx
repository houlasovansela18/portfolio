import dynamic from "next/dynamic";
const DynamicMainPageContainer = dynamic(
	() => import("../components/Container/MainPageContainer")
);
const DynamicHeadCustom = dynamic(
	() => import("../components/Head/CustomHead")
);
import ContactPageContent from "../components/ContactComponents/ContactPageContent";

export default function Contact() {
	return (
		<>
			<DynamicHeadCustom />
			<DynamicMainPageContainer MainContent={ContactPageContent} />
		</>
	);
}
