import HeadCustom from "../components/Head/CustomHead";
import MainPageContainer from "../components/Container/MainPageContainer";
import NotePageContent from "../components/NoteComponents/NotePageContent";

export default function Note() {
	return (
		<>
			<HeadCustom />
			<MainPageContainer MainContent={NotePageContent} />
		</>
	);
}
