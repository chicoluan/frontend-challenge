import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>Digite seu usuário e senha</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="flex flex-col gap-6">
							<div className="grid gap-3">
								<Label htmlFor="user">Usuário</Label>
								<Input id="user" type="text" placeholder="admin" required />
							</div>
							<div className="grid gap-3">
								<Label htmlFor="password">Senha</Label>
								<Input id="password" type="password" required />
							</div>
							<div className="flex flex-col gap-3">
								<Button type="submit" className="w-full">
									Entrar
								</Button>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
