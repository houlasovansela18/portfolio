import ResponsiveBodyContainer from "../Container/ResponsiveBodyContainer";
import TopNavbar from "../Navbar/TopNavbar";
import HomeBodyContent from "./HomeBodyContent";

export default function HomePageContent(): JSX.Element {
	return (
		<>
			<div className="flex-none">
				<TopNavbar />
			</div>
			<div className="flex-1">
				<ResponsiveBodyContainer>
					<HomeBodyContent />
				</ResponsiveBodyContainer>
			</div>
		</>
	);
}
