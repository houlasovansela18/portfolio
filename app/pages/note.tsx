import dynamic from "next/dynamic";
const DynamicMainPageContainer = dynamic(
	() => import("../components/Container/MainPageContainer")
);
const DynamicHeadCustom = dynamic(
	() => import("../components/Head/CustomHead")
);
import NotePageContent from "../components/NoteComponents/NotePageContent";

export default function Note() {
	return (
		<>
			<DynamicHeadCustom />
			<DynamicMainPageContainer MainContent={NotePageContent} />
		</>
	);
}
