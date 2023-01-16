import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function MainPageContainer({
	MainContent,
}: {
	MainContent: () => JSX.Element;
}) {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);
	const isDarkMode = darkMode === "dark";
	return (
		<main
			className={`${
				isDarkMode ? "bg-black text-white" : "bg-white text-black"
			} flex flex-col h-full w-full absolute`}
		>
			<MainContent />
		</main>
	);
}
