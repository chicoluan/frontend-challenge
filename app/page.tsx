import { LoginForm } from "@/components/login-form/login-form";
import type { JSX } from "react";

export default function HomePage(): JSX.Element {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<LoginForm className="w-xs sm:w-sm md:w-md" />
			</main>
		</div>
	);
}
