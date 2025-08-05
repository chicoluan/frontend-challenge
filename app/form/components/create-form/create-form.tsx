// biome-ignore assist/source/organizeImports: <>
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
					<CardTitle>Novo formulário</CardTitle>
				</CardHeader>
                <CardContent>
                    
                    <Button type="button" variant='link'>Adicionar Pergunta</Button>
                </CardContent>
			</Card>
		</div>
	);
}
