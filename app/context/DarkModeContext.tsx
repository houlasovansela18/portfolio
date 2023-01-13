import { createContext } from "react";

export const DarkModeContext = createContext({
	darkMode: "",
	setDarkMode: (value: string) => {
		(value: string) => {};
	},
});
