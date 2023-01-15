import { FiBriefcase, FiCode, FiMonitor } from "react-icons/fi";

export default function ProfileInfoContainer() {
	const userName = "houla sovansela";
	const nickName = "godda";
	const bio = [
		// eslint-disable-next-line react/jsx-key
		["software developer", <FiCode size={20} />],
		// eslint-disable-next-line react/jsx-key
		["self employ", <FiBriefcase size={20} />],
		// eslint-disable-next-line react/jsx-key
		["Free lancer", <FiMonitor size={20} />],
	];
	return (
		<div className="space-y-2">
			<div className="flex justify-between items-center">
				<div className="flex flex-col">
					<span className="text-xs opacity-90">
						<p>Sigma, Geek !</p>
					</span>
					<h1 className="font-bold sm:text-4xl text-2xl cursor-not-allowed uppercase inline-block opacity-90`">
						{userName}
					</h1>
				</div>
				<span className="flex items-center gap-1 opacity-80`">
					<p className="px-2 dark:bg-zinc-900 bg-zinc-200 rounded-tl-xl rounded-br-xl text-xs sm:text-sm">
						aka
					</p>
					<h2 className="font-bold sm:text-2xl text-xl cursor-not-allowed uppercase">
						{nickName}
					</h2>
				</span>
			</div>
			<h2 className="flex items-center capitalize gap-2 text-xs md:text-sm">
				{bio.map((value, index) => {
					return (
						<>
							<span className="flex items-center gap-2 opacity-90`">
								<p>{value[0]}</p>
								{value[1]}
							</span>
							{index == bio.length - 1 ? "" : "|"}
						</>
					);
				})}
			</h2>
		</div>
	);
}
