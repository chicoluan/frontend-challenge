"use client";

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
import { useState, type FormEvent } from "react";

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
    const  [answer, setAnswer] = useState(false)
	const handleLoginForm = (e: FormEvent<HTMLFormElement>) => {
		console.log(e);
	};
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle>Bem Vindo</CardTitle>
					<CardDescription>
						Digite seu nome + sobrenome para criar ou responder um formulário
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={(e) => handleLoginForm(e)}>
						<div className="flex flex-col gap-6 w-full">
							<div className="grid gap-3">
								<Label htmlFor="first_name">Nome</Label>
								<Input
									id="first_name"
                                    className="w-full"
									type="text"
									placeholder="Ex: Ivancley"
									required
								/>
								<Label htmlFor="last_name">Sobrenome</Label>
								<Input id="last_name" type="text" placeholder="Ex: Brito" required />
							</div>
							<div className="flex flex-col gap-2 sm:flex-row w-full justify-end">
								<Button type="button">
									Novo formulário
								</Button>
								<Button type="button" variant='outline'>
									Responder formulário
								</Button>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
