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
			<div>
				Coming Soon!
			</div>
		</>
	);
}
