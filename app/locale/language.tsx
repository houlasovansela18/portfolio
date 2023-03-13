type languagePropsType = {
	behavior: string;
	name: string;
	nickName: string;
	majoring: string;
	status: string;
	job: string;
	selfDescription: string;
};

type languageType = {
	[key: string]: languagePropsType;
};

export const LANGUAGE: languageType = {
	en: {
		// for home routes
		behavior: "Sigma, GEEK!",
		name: "HOULA SOVANSELA",
		nickName: "GODDA",
		majoring: "Software Developer",
		status: "Self Employ",
		job: "Free Lancer",
		selfDescription:
			"I am a software developer graduated from Kirirom Institute of Technology. I had experiences in website, mobile development, AI, machine learning and computer vision.",
	},
	kh: {
		// for home routes
		behavior: "Sigma, GEEK!",
		name: "HOULA SOVANSELA",
		nickName: "GODDA",
		majoring: "Software Developer",
		status: "Self Employ",
		job: "Free Lancer",
		selfDescription:
			"I am a software developer graduated from Kirirom Institute of Technology. I had experiences in website, mobile development, AI, machine learning and computer vision.",
	},
};
