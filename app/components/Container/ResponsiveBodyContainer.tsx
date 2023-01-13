import ProfilePicture from "../Picture/ProfilePicture";
import Rainbow from "../Stylish/Rainbow";

export default function ResponsiveBodyContainer() {
	return (
		<div className={`bg-transparent border mx-auto sm:w-screen md:w-3/4 lg:w-3/4 xl:w-2/3 2xl:w-1/2`}>
			<Rainbow />
			<ProfilePicture />
		</div>
	);
}
