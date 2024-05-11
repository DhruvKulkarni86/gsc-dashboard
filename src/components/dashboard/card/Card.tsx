import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Component({
	heading,
	value,
	change,
}: {
	heading: string;
	value: string;
	change: string;
}) {
	return (
		<Card className="w-[250px] sm:w-[200px] lg:w-[250px]">
			<CardHeader className="pb-2">
				<CardDescription>{heading}</CardDescription>
				<CardTitle className="text-4xl">{value}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="text-xs text-muted-foreground">{change}</div>
			</CardContent>
		</Card>
	);
}
