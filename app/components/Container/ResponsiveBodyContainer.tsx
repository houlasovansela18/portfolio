import { FiBriefcase, FiCode, FiTerminal } from "react-icons/fi";
import ProfilePicture from "../Picture/ProfilePicture";
import Rainbow from "../Stylish/Rainbow";

export default function ResponsiveBodyContainer() {
	const userName = "HOULA SOVANSELA";
	const aboutMe= `I am a software developer graduated from Kirirom Institute of
	Technology. I had experiences in web, mobile development AI,
	machine learning and computer vision for almost 4 year.`
	return (
		<div className="bg-transparent mx-auto h-full max-w-4xl px-8">
			<Rainbow width={60} height={60} />
			<div className="flex flex-col justify-between sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-16">
				<div className="flex flex-1 justify-start flex-col space-y-8 text-justify">
					<div>
						<h1 className="font-bold sm:text-4xl text-3xl">{userName}</h1>
						<h2 className="flex flex-row items-center  space-x-2">
							<p>Software Developer</p>
							<FiCode />
							<p>|</p>
							<p>Self Employ</p>
							<FiBriefcase />
						</h2>
					</div>
					<div>
						<p>{aboutMe}</p>
					</div>
				</div>
				<div className="flex-none justify-end hidden md:flex">
					<ProfilePicture width={40} height={40} />
				</div>
			</div>
		</div>
	);
}
