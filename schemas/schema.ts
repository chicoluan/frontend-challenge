import { z } from 'zod'

export const questionSchema = z.object({
  id: z.uuid(),
  id_formulario: z.uuid(),
  titulo: z.string(),
  codigo: z.string(),
  orientacao_resposta: z.string(),
  ordem: z.number(),
  obrigatoria: z.boolean(),
  sub_pergunta: z.boolean(),
  tipo_pergunta: z.enum([
    'Sim_Não',
    'multipla_escola',
    'unica_escolha',
    'texto_livre',
    'Inteiro',
    'Numero com duas casa decimais',
  ]),
})

export const formSchema = z.object({
  id: z.uuid(),
  titulo: z.string(),
  descricao: z.string().optional(),
  ordem: z.number(),
})

export const optionAnswerSchema = z.object({
  id: z.uuid(),
  id_pergunta: z.uuid(),
  resposta: z.string(),
  ordem: z.number(),
  resposta_aberta: z.boolean(),
})

export const optionQuestionAnswerSchema = z.object({
  id: z.uuid(),
  id_opcao_resposta: z.uuid(),
  id_pergunta: z.uuid(),
})
