import ProfilePicture from "../Picture/ProfilePicture";
import Rainbow from "../Stylish/Rainbow";

export default function ResponsiveBodyContainer() {
	return (
		<div className=" bg-transparent mx-auto h-full w-11/12 sm:w-5/6 md:w-3/4 lg:w-3/4 xl:w-2/3 2xl:w-1/2">
			<Rainbow />
			<ProfilePicture />
		</div>
	);
}
