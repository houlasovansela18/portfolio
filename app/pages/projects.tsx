import MainPageContainer from "../components/Container/MainPageContainer";
import HeadCustom from "../components/Head/CustomHead";
import ProjectsPageContent from "../components/ProjectsComponents/ProjectsPageContent";

export default function Projects() {
	return (
		<>
			<HeadCustom />
			<MainPageContainer MainContent={ProjectsPageContent} />
		</>
	);
}
