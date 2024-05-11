import EquityCurve from "@/components/analytics/EquityCurve";
import { Overview } from "@/components/analytics/Overview";
import StackedChart from "@/components/analytics/StackedChart";

export const Analytics = () => {
	return (
		<>
			<div className="flex flex-col w-full gap-5">
				<h1 className="text-3xl font-semibold lg:text-3xl">
					Trade
					<span className="text-primary"> Analytics</span>
				</h1>
				<div className="flex flex-col gap-2">
					<h2 className="pb-2 text-xl font-medium tracking-tight scroll-m-20 first:mt-0">
						Overview
					</h2>
					<Overview />
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="pb-2 text-xl font-medium tracking-tight scroll-m-20 first:mt-0">
						Equity Curve
					</h2>
					<EquityCurve />
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="pb-2 text-xl font-medium tracking-tight scroll-m-20 first:mt-0">
						Some Stacked chart showing finance thingamajig
					</h2>
					<StackedChart />
				</div>
			</div>
		</>
	);
};
