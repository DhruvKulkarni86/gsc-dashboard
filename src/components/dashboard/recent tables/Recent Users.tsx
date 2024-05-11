import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default function RecentUsers() {
	return (
		<Card>
			<CardHeader className="px-7">
				<CardTitle>New Users</CardTitle>
				<CardDescription>Recently joined users</CardDescription>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Customer</TableHead>
							<TableHead className="hidden sm:table-cell">
								Status
							</TableHead>
							<TableHead className="hidden md:table-cell">
								Date
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow className="bg-accent">
							<TableCell>
								<div className="font-medium">John Doe</div>
								<div className="hidden text-sm text-muted-foreground md:inline">
									john@doe.com
								</div>
							</TableCell>
							<TableCell className="hidden sm:table-cell">
								<Badge className="text-xs" variant="secondary">
									Referal
								</Badge>
							</TableCell>
							<TableCell className="hidden md:table-cell">
								2023-06-23
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<div className="font-medium">Jane Doe</div>
								<div className="hidden text-sm text-muted-foreground md:inline">
									jane@doe.com
								</div>
							</TableCell>
							<TableCell className="hidden sm:table-cell">
								<Badge className="text-xs" variant="outline">
									Promotional
								</Badge>
							</TableCell>
							<TableCell className="hidden md:table-cell">
								2023-06-24
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<div className="font-medium">Jim Halpert</div>
								<div className="hidden text-sm text-muted-foreground md:inline">
									jim@halpert.com
								</div>
							</TableCell>
							<TableCell className="hidden sm:table-cell">
								<Badge className="text-xs" variant="secondary">
									Social
								</Badge>
							</TableCell>
							<TableCell className="hidden md:table-cell">
								2023-06-25
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
