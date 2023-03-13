import ResponsiveBodyContainer from "../Container/ResponsiveBodyContainer";
import TopNavbar from "../Navbar/TopNavbar";
import NoteBodyContent from "./NoteBodyContent";

export default function HomePageContent() {
	return (
		<>
			<div className="flex-none">
				<TopNavbar />
			</div>
			<div className="flex-1">
				<ResponsiveBodyContainer>
					<NoteBodyContent />
				</ResponsiveBodyContainer>
			</div>
		</>
	);
}
