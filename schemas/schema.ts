import { z } from "zod";

export const questionSchema = z.object({
	id: z.uuid(),
})

export const formSchema = z.object({
	id: z.uuid(),
	titulo: z.string(),
	descricao: z.string().optional(),
	ordem: z.number(),
});
