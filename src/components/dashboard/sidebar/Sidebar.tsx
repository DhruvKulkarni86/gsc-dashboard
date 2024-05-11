import { Home, LineChart, Settings, ShoppingCart, Users2 } from "lucide-react";

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from "@/components/ui/tooltip";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import gscImg from "@/assets/gsc2.jpg";

import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";

export const Sidebar = () => {
	return (
		<TooltipProvider>
			<aside className="fixed inset-y-0 left-0 z-0 flex-col hidden border-r w-14 bg-background sm:flex">
				<nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
					<Link
						to=""
						className="flex items-center justify-center gap-2 text-lg font-semibold rounded-full group h-9 w-9 shrink-0 bg-primary text-primary-foreground md:h-8 md:w-8 md:text-base"
					>
						<Avatar>
							<AvatarImage src={gscImg} alt="@gsc" />
							<AvatarFallback>GSC</AvatarFallback>
						</Avatar>
						<span className="sr-only">Gift Street Capital</span>
					</Link>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								to=""
								className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
							>
								<Home className="w-5 h-5" />
								<span className="sr-only">Dashboard</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent side="right">Dashboard</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								to="/analytics"
								className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
							>
								<LineChart className="w-5 h-5" />
								<span className="sr-only">Analytics</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent side="right">Analytics</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								to="/orders"
								className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
							>
								<ShoppingCart className="w-5 h-5" />
								<span className="sr-only">Orders</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent side="right">Orders</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								to="/customers"
								className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
							>
								<Users2 className="w-5 h-5" />
								<span className="sr-only">Customers</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent side="right">Customers</TooltipContent>
					</Tooltip>
				</nav>
				<nav className="flex flex-col items-center gap-4 px-2 mt-auto sm:py-5">
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								to="/settings"
								className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
							>
								<Settings className="w-5 h-5" />
								<span className="sr-only">Settings</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent side="right">Settings</TooltipContent>
					</Tooltip>

					<ModeToggle />
				</nav>
			</aside>
		</TooltipProvider>
	);
};
