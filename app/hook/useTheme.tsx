import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useTheme = () => {
	const [colorMode, setColorMode] = useLocalStorage("theme", "dark");

	useEffect(() => {
		const html = document.querySelector("html")?.classList;
		if (colorMode === "dark") {
			html?.add(colorMode);
			html?.remove("light");
		} else {
			html?.add("light");
			html?.remove("dark");
		}
	}, [colorMode]);

	return [colorMode, setColorMode];
};

export default useTheme;
