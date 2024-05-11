import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "./components/layouts/DashboardLayout";
import { Dashboard } from "./pages/Dashboard";
import { Analytics } from "./pages/Analytics";
import { NoMatch } from "./pages/NoMatch";

export const Routes = createBrowserRouter([
	{
		path: "/",
		element: <DashboardLayout />,
		children: [
			{
				path: "",
				element: <Dashboard />,
			},
			{
				path: "analytics",
				element: <Analytics />,
			},
		],
	},
	{
		path: "*",
		element: <NoMatch />,
	},
]);
