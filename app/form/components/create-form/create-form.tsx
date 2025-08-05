"use client";
// biome-ignore assist/source/organizeImports: <>
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
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { JSX } from "react";

export default function CreateForm({
	className,
	...props
}: React.ComponentProps<"div">): JSX.Element {
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="md:text-xl">Novo formulário</CardTitle>
					<CardDescription>
						Escreva o titulo para adicionar as perguntas
					</CardDescription>
				</CardHeader>
				<Separator />
				<CardContent className="flex flex-col justify-end gap-3">
					<div className="flex flex-col gap-2">
						<Label>Titulo</Label>
						<Input />
					</div>
					<div className="flex flex-col gap-2">
						<Label>Descrição</Label>
						<Textarea />
					</div>
					<Button
						type="button"
						variant="outline"
						className="self-end hover:cursor-pointer"
						disabled
					>
						Adicionar Pergunta
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
