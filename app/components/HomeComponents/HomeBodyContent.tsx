import { FiDollarSign, FiDownload } from "react-icons/fi";
import ProfileInfoContainer from "../Container/ProfileInfoContainer";
import Rainbow from "../Stylish/Rainbow";
import ProfilePicture from "../Picture/ProfilePicture";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useContext } from "react";

export default function HomeContent() {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);
	const iSDarkMode = darkMode === "dark";
	const aboutMe = `I am a software developer graduated from Kirirom Institute of
	Technology. I had experiences in website, mobile development, AI,
	machine learning and computer vision.`;
	return (
		<>
			<div className="w-40 h-40 absolute">
				<Rainbow width="40" height="40" />
			</div>
			<div className="flex flex-col justify-between sm:flex-row gap-20">
				<div className="flex flex-1 justify-start flex-col space-y-8 text-justify z-10">
					<ProfileInfoContainer />
					<div className="opacity-90 text-xs sm:text-sm">
						<p>{aboutMe}</p>
					</div>
					<div className="flex justify-end text-xs sm:text-sm gap-3 opacity-90">
						<a
							className={`${
								iSDarkMode ? "text-white" : " text-black"
							} flex flex-none items-center gap-1 px-3 py-1 rounded-xl border-2 hover:font-bold`}
							href="/resume.pdf"
							download
						>
							<p>Resume</p>
							<FiDownload size={20} />
						</a>
						<span className="flex flex-none items-center gap-1 px-3 py-1 rounded-xl border-2">
							<p>Hire me</p>
							<FiDollarSign size={20} />
						</span>
						<div className="w-20 h-20 absolute">
							<Rainbow width="20" height="20" />
						</div>
					</div>
				</div>
				<div className="hidden flex-none md:flex justify-end w-40 h-40">
					<div className="absolute">
						<Rainbow width="40" height="40" />
					</div>
					<div className="z-10">
						<ProfilePicture width="40" height="40" />
					</div>
				</div>
			</div>
		</>
	);
}
