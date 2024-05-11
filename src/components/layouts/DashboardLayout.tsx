import { Outlet } from "react-router-dom";
import { Header } from "../dashboard/header/Header";
import { Sidebar } from "../dashboard/sidebar/Sidebar";

export const DashboardLayout = () => {
	return (
		<>
			<div className="flex flex-col w-full min-h-screen bg-muted/40">
				<Sidebar />
				<div className="flex flex-col grow sm:gap-4 sm:py-4 sm:pl-14">
					<Header />
					<main className="flex flex-1 gap-4 px-4 sm:px-6">
						<Outlet />
					</main>
				</div>
			</div>
		</>
	);
};
