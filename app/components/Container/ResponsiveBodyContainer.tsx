import {
	FiBriefcase,
	FiCode,
	FiDollarSign,
	FiDownload,
	FiMonitor,
} from "react-icons/fi";
import ProfilePicture from "../Picture/ProfilePicture";
import Rainbow from "../Stylish/Rainbow";

export default function ResponsiveBodyContainer() {
	const userName = "houla sovansela";
	const nickName = "godda";
	const aboutMe = `I am a software developer graduated from Kirirom Institute of
	Technology. I had experiences in website, mobile development, AI,
	machine learning and computer vision.`;
	const bio = [
		// eslint-disable-next-line react/jsx-key
		["software developer", <FiCode size={20} />],
		// eslint-disable-next-line react/jsx-key
		["self employ", <FiBriefcase size={20} />],
		// eslint-disable-next-line react/jsx-key
		["Free lancer", <FiMonitor size={20} />],
	];
	return (
		<>
			<div className="bg-transparent mx-auto max-w-4xl px-5">
				<div className="w-40 h-40 absolute">
					<Rainbow width="40" height="40" />
				</div>
				<div className="flex flex-col justify-between sm:flex-row gap-20">
					<div className="flex flex-1 justify-start flex-col space-y-8 text-justify">
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
						<div className="opacity-90 text-xs sm:text-sm">
							<p>{aboutMe}</p>
						</div>
						<div className="flex justify-end text-xs sm:text-sm gap-4">
							<a
								className="flex flex-none items-center gap-1 px-3 py-1 rounded-xl border-2"
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
						<ProfilePicture width="40" height="40" />
					</div>
				</div>
			</div>
		</>
	);
}
