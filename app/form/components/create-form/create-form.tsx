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
import { supabase } from '@/utils/supabase/client'
import { type JSX, useState } from 'react'

export default function CreateForm({
  className,
  ...props
}: React.ComponentProps<'div'>): JSX.Element {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [order, setOrder] = useState(0)
  const [loading, setLoading] = useState(false)

  const { onOpen } = useDialog()

  const handleCreateForm = async () => {
    if (!title.trim()) {
      return
    }
    setLoading(true)
    const { data, error } = await supabase
      .from('formulario')
      .insert([{ titulo: title, descricao: description }])
      .select()
      .single()
    setLoading(false)

    if (error) {
      console.error('Erro ao criar formulário:', error)
      return
    }

    if (data) {
      onOpen('questionDialog', { formId: data.id })
    }
  }

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
          <div className='flex'>
            <div className='flex flex-col gap-2'>
              <Label>Titulo</Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Digite o título do formulário'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <Label>Ordem(opcional)</Label>
              <Input
                type='number'
                value={order}
                onChange={(e) => setOrder(Number(e.target.value))}
                placeholder='Digite o título do formulário'
              />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <Label>Descrição</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Descreva o propósito do formulário'
            />
          </div>
          <Button
            type='button'
            variant='outline'
            className='self-end hover:cursor-pointer'
            disabled={title.trim().length === 0}
            onClick={handleCreateForm}
          >
            {loading ? 'Criando...' : 'Adicionar Pergunta'}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
