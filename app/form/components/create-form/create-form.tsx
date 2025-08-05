'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { useDialog } from '@/hooks/use-dialog-store'
import { cn } from '@/lib/utils'
import { type JSX, useState } from 'react'

export default function CreateForm({
  className,
  ...props
}: React.ComponentProps<'div'>): JSX.Element {
  const [title, setTitle] = useState('')
  const { onOpen } = useDialog()
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className='md:text-xl'>Novo formulário</CardTitle>
          <CardDescription>
            Escreva o titulo para adicionar as perguntas
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className='flex flex-col justify-end gap-3'>
          <div className='flex flex-col gap-2'>
            <Label>Titulo</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Digite o título do formulário'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <Label>Descrição</Label>
            <Textarea placeholder='Descreva o propósito do formulário' />
          </div>
          <Button
            type='button'
            variant='outline'
            className='self-end hover:cursor-pointer'
            disabled={title.trim().length === 0}
            onClick={() => onOpen('questionDialog')}
          >
            Adicionar Pergunta
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
