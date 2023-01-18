/* eslint-disable react/jsx-key */

import {
	FiFolder,
	FiGithub,
	FiHome,
	FiMenu,
	FiMoon,
	FiPenTool,
	FiPhone,
	FiSun,
	FiX,
} from "react-icons/fi";
import { GiMuscleUp } from "react-icons/gi";
import Link from "next/link";
import ProfilePicture from "../Picture/ProfilePicture";
import Rainbow from "../Stylish/Rainbow";
import { useRouter } from "next/router";
import { useState } from "react";
import useLocalStorage from "../../hook/useLocalStorage";
import useTheme from "../../hook/useTheme";

export default function TopNavbar() {
	const router = useRouter();
	const path = router.pathname;
	const [theme, setTheme] = useTheme();
	const isDarkMode = theme === "dark";
	const [isClose, setIsClose] = useState(false);
	const githubLink = "https://github.com/houlasovansela18";
	const navElement = [
		["", <FiHome size={20} />],
		["note", <FiPenTool size={20} />],
		["motivation", <GiMuscleUp size={20} />],
		["projects", <FiFolder size={20} />],
		["contact", <FiPhone size={20} />],
	];
	// .filter((element) => element[0] != route.replace("/", ""))
	return (
		<nav className="flex flex-col bg-transparent pt-2 pb-10 mx-auto max-w-4xl px-5">
			<div className="flex flex-1 justify-between items-center">
				<div className="flex md:hidden -ml-[11px]">
					<button
						onClick={() => {
							setIsClose(!isClose);
						}}
						className={`hover:bg-zinc-200 dark:hover:bg-zinc-900 rounded-xl p-2 opacity-90 hover:opacity-100`}
					>
						{isClose ? <FiMenu size={24} /> : <FiX size={24} />}
					</button>
				</div>
				<div className="gap-3 hidden md:flex -ml-[15px]">
					{navElement.map((element) => {
						return (
							<Link
								key={`${element[0]}_${element[1]}`}
								href={`/${element[0]}`}
								className={`${
									element[0] === path.replace("/", "") ? "border-2" : ""
								} rounded-xl opacity-90 hover:opacity-100 hover:font-bold py-2 px-3 flex items-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-900`}
							>
								<span className="capitalize">
									{element[0] === "" ? "home" : element[0]}
								</span>
								{element[1]}
							</Link>
						);
					})}
				</div>
				<div className="flex items-center space-x-2 mr-0 md:mr-[-0.60rem]">
					<button
						onClick={() => {
							isDarkMode ? setTheme("light") : setTheme("dark");
						}}
						className="rounded-xl opacity-90 hover:opacity-100 hover:bg-zinc-200 dark:hover:bg-zinc-900 p-2 flex items-center gap-1"
					>
						{!isDarkMode ? <FiMoon size={24} /> : <FiSun size={24} />}
					</button>
					<Link
						href={`${githubLink}`}
						className={`hover:bg-zinc-200 dark:hover:bg-zinc-900 rounded-xl opacity-90 hover:opacity-100 p-2 flex items-center gap-1`}
					>
						<FiGithub size={24} />
					</Link>
					<div className="flex md:hidden w-12 h-12">
						<div className="w-20 h-20 absolute">
							<Rainbow width="20" height="20" />
						</div>
						<div className="z-10">
							<ProfilePicture width="12" height="12" />
						</div>
					</div>
				</div>
			</div>
			<div
				className={`gap-3 ${
					isClose ? "hidden" : "flex flex-col"
				} md:hidden justify-center items-center mt-5`}
			>
				{navElement.map((element) => {
					return (
						<Link
							key={`${element[0]}_${element[1]}`}
							href={`/${element[0]}`}
							className={`hover:bg-zinc-200 dark:hover:bg-zinc-900 ${
								element[0] === path.replace("/", "") ? "border-2" : ""
							} rounded-xl opacity-90 hover:opacity-100 hover:font-bold py-2 px-3 flex justify-start items-center gap-2`}
						>
							<span className="capitalize">
								{element[0] === "" ? "home" : element[0]}
							</span>
							{element[1]}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
