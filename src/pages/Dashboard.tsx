import Card from "@/components/dashboard/card/Card";
import RecentUsers from "@/components/dashboard/recent tables/Recent Users";
import RecentOrders from "@/components/dashboard/recent tables/RecentOrders";
import Upgrade from "@/components/dashboard/recent tables/Upgrade";

export const Dashboard = () => {
	const name = " Dhruv";
	return (
		<>
			<div className="flex flex-col w-full gap-5">
				<h1 className="text-3xl font-semibold lg:text-3xl">
					Welcome,
					<span className="text-primary">{name}👋</span>
				</h1>
				<div className="flex flex-row flex-wrap justify-start w-full gap-5 ">
					<Card
						heading="Commodity Trade This Week"
						value="$1499"
						change="+15% from last week"
					/>
					<Card
						heading="Revenue"
						value="$2596"
						change="+25% from last month"
					/>
					<Card
						heading="Average Trade Size"
						value="$500"
						change="+10% from last week"
					/>
					<Card
						heading="Client Retention Rate"
						value="88%"
						change="+5% from last month"
					/>
				</div>
				<div className="flex flex-row flex-wrap w-full gap-5 ">
					<RecentOrders />
					<RecentUsers />
					<div className="w-1/2">
						<Upgrade />
					</div>
				</div>
			</div>
		</>
	);
};
