import { RouterProvider } from "react-router-dom";
import { Routes } from "./Routes";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<RouterProvider router={Routes} />
		</ThemeProvider>
	);
}

export default App;
