import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import {
	FiDownload,
	FiGithub,
	FiHome,
	FiMoon,
	FiPenTool,
	FiSun,
} from "react-icons/fi";
import { GiMuscleUp } from "react-icons/gi";
import Link from "next/link";

export default function TopNavbar() {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);
	const isDarkMode = darkMode == "dark";
	const githubLink = "https://github.com/houlasovansela18";
	return (
		<div className="bg-transparent h-24 mx-auto sm:w-screen md:w-3/4 lg:w-3/4 xl:w-2/3 2xl:w-1/2 flex flex-row justify-between items-center">
			<div className="flex flex-row justify-center items-center space-x-4">
				<Link
					href={`/`}
					className="rounded-xl hover:bg-zinc-500 p-2 flex flex-row items-center space-x-1"
				>
					<span>Home</span>
					<FiHome />
				</Link>
				<Link
					href={`/`}
					className="rounded-xl hover:bg-zinc-500 p-2 flex flex-row items-center space-x-1"
				>
					<span>Leave a Note</span>
					<FiPenTool />
				</Link>
				<Link
					href={`/`}
					className="rounded-xl hover:bg-zinc-500 p-2 flex flex-row items-center space-x-1"
				>
					<span>Need Motivation?</span>
					<GiMuscleUp />
				</Link>
				<Link
					href={`/`}
					className="rounded-xl hover:bg-zinc-500 p-2 flex flex-row items-center space-x-1"
				>
					<span>Get Resume</span>
					<FiDownload />
				</Link>
			</div>

			<div className="flex flex-row justify-center items-center space-x-4">
				<button
					onClick={() => {
						if (isDarkMode) {
							setDarkMode("light");
						} else {
							setDarkMode("dark");
						}
					}}
					className="rounded-xl hover:bg-zinc-500 p-2"
				>
					{!isDarkMode ? <FiMoon size={24} /> : <FiSun size={24} />}
				</button>
				<Link
					href={`${githubLink}`}
					className="rounded-xl hover:bg-zinc-500 p-2"
				>
					<FiGithub size={24} />
				</Link>
			</div>
		</div>
	);
}
