import { useState, createContext, useContext } from "react";

const ThemeContext = createContext(true);
const ThemeUpdateContext = createContext((value: boolean) => {
	(value: boolean) => {};
});

export function useTheme() {
	return useContext(ThemeContext);
}

export function useThemeUpdate() {
	return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
	const [darkTheme, setDarkTheme] = useState(true);
	return (
		<ThemeContext.Provider value={darkTheme}>
			<ThemeUpdateContext.Provider value={setDarkTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
}
