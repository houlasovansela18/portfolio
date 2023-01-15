import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import {
	FiDownload,
	FiFolder,
	FiGithub,
	FiHome,
	FiMenu,
	FiMoon,
	FiPenTool,
	FiPhone,
	FiSun,
} from "react-icons/fi";
import { GiMuscleUp } from "react-icons/gi";
import Link from "next/link";
import ProfilePicture from "../Picture/ProfilePicture";
import Rainbow from "../Stylish/Rainbow";

export default function TopNavbar() {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);
	const isDarkMode = darkMode == "dark";
	const githubLink = "https://github.com/houlasovansela18";
	const navElement = [
		// eslint-disable-next-line react/jsx-key
		["home", <FiHome size={20} />],
		// eslint-disable-next-line react/jsx-key
		["note", <FiPenTool size={20} />],
		// eslint-disable-next-line react/jsx-key
		["motivation", <GiMuscleUp size={20} />],
		// eslint-disable-next-line react/jsx-key
		["projects", <FiFolder size={20} />],
		// eslint-disable-next-line react/jsx-key
		["contact", <FiPhone size={20} />],
	];
	return (
		<>
			<nav className="bg-transparent py-5 mx-auto max-w-4xl px-5 flex justify-between items-center relative">
				<div className="flex md:hidden ml-[-0.60rem]">
					<button
						onClick={() => {}}
						className="rounded-xl hover:bg-zinc-500 p-2 opacity-90 hover:opacity-100"
					>
						<FiMenu size={24} />
					</button>
				</div>
				<div className="gap-3 hidden md:flex ml-[-0.60rem]">
					{navElement.map((element) => {
						return (
							<Link
								key={`${element[0]}`}
								href={element[0] != "home" ? `/${element[0]}` : "/"}
								className="rounded-xl opacity-90 hover:opacity-100 hover:font-bold hover:bg-zinc-200 hover:dark:bg-zinc-900 py-2 px-3 flex items-center gap-2"
							>
								<span className="capitalize">{element[0]}</span>
								{element[1]}
							</Link>
						);
					})}
				</div>
				<div className="flex items-center space-x-2 mr-0 md:mr-[-0.60rem]">
					<button
						onClick={() => {
							if (isDarkMode) {
								setDarkMode("light");
							} else {
								setDarkMode("dark");
							}
						}}
						className="rounded-xl opacity-90 hover:opacity-100 hover:bg-zinc-200 hover:dark:bg-zinc-900 p-2 flex items-center gap-1"
					>
						{!isDarkMode ? <FiMoon size={24} /> : <FiSun size={24} />}
					</button>
					<Link
						href={`${githubLink}`}
						className="rounded-xl opacity-90 hover:opacity-100 hover:bg-zinc-200 hover:dark:bg-zinc-900 p-2 flex items-center gap-1"
					>
						<FiGithub size={24} />
					</Link>
					<div className="flex md:hidden w-12 h-12">
						<div className="w-20 h-20 absolute">
							<Rainbow width="20" height="20" />
						</div>
						<ProfilePicture width="12" height="12" />
					</div>
				</div>
			</nav>
		</>
	);
}
