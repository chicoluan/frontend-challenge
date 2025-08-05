import type { JSX } from "react";
import CreateForm from "./components/create-form/create-form";

export default function FormPage(): JSX.Element {
	return <CreateForm className="w-xs sm:w-sm md:w-md lg:w-2xl" />;
}
