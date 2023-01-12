import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function TopNavbar() {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);
	const isDarkMode = darkMode == "dark";
	return (
		<>
			<div className="text-lg font-bold">{darkMode}</div>
			<button
				onClick={() => {
					if (isDarkMode) {
						setDarkMode("light");
					} else {
						setDarkMode("dark");
					}
				}}
			>
				press
			</button>
		</>
	);
}
