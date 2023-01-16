import ResponsiveBodyContainer from "../Container/ResponsiveBodyContainer";
import TopNavbar from "../Navbar/TopNavbar";
import HomeContent from "./MotivationBodyContent";

export default function HomePageContent() {
	return (
		<>
			<div className="flex-none">
				<TopNavbar />
			</div>
			<div className="flex-1">
				<ResponsiveBodyContainer ContentBody={HomeContent} />
			</div>
		</>
	);
}
