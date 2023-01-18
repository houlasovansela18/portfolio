/* eslint-disable react/jsx-key */
import { FiBriefcase, FiCode, FiMonitor } from "react-icons/fi";

export default function ProfileInfoContainer() {
	const userName = "houla sovansela";
	const nickName = "godda";
	const bio = [
		["software developer", <FiCode size={20} />],
		["self employ", <FiBriefcase size={20} />],
		["Free lancer", <FiMonitor size={20} />],
	];
	return (
		<div className="space-y-2">
			<div className="flex justify-between items-center">
				<div className="flex flex-col">
					<span className="text-xs opacity-90">
						<p>Sigma, Geek !</p>
					</span>
					<h1 className="font-extrabold sm:text-4xl text-2xl cursor-not-allowed uppercase inline-block opacity-90 -ml-1">
						{userName}
					</h1>
				</div>
				<span className="flex items-center gap-1 opacity-80`">
					<p className="px-2 dark:bg-zinc-900 bg-zinc-200 rounded-tl-xl rounded-br-xl text-xs sm:text-sm">
						aka
					</p>
					<h2 className="font-extrabold sm:text-2xl text-xl cursor-not-allowed uppercase">
						{nickName}
					</h2>
				</span>
			</div>
			<div className="flex items-center capitalize gap-2 text-xs md:text-sm">
				{bio.map((value, index) => {
					return (
						<span className="flex items-center gap-2" key={`${value}_${index}`}>
							<p>{value[0]}</p>
							{value[1]}
							{index == bio.length - 1 ? "" : "|"}
						</span>
					);
				})}
			</div>
		</div>
	);
}
