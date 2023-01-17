import dynamic from "next/dynamic";
const DynamicMainPageContainer = dynamic(
	() => import("../components/Container/MainPageContainer")
);
const DynamicHeadCustom = dynamic(
	() => import("../components/Head/CustomHead")
);
import ProjectsPageContent from "../components/ProjectsComponents/ProjectsPageContent";

export default function Projects() {
	return (
		<>
			<DynamicHeadCustom />
			<DynamicMainPageContainer MainContent={ProjectsPageContent} />
		</>
	);
}
