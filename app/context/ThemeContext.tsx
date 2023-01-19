import { useState, createContext, useEffect } from "react";

type ThemeContextType = {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<string>("");
	useEffect(() => {
		setTheme(window.localStorage.getItem("theme") || "");
	}, [theme]);
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
