import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useDialog } from '@/hooks/use-dialog-store'
import { supabase } from '@/utils/supabase/client'
import { useState, type JSX } from 'react'

export default function QuestionDialog(): JSX.Element {
  const { type, isOpen, onClose, data } = useDialog()
  const isDialogOpen = isOpen && type === 'questionDialog'

  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const [questionType, setQuestionType] = useState('texto')
  const [required, setRequired] = useState(false)
  const [subQuestion, setSubQuestion] = useState(false)
  const [orientation, setOrientation] = useState('')
  const [order, setOrder] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleCreate = async () => {
    setLoading(true)

    const { error } = await supabase.from('pergunta').insert({
      titulo: title,
      codigo: code,
      tipo_pergunta: questionType,
      obrigatoria: required,
      sub_pergunta: subQuestion,
      orientacao_resposta: orientation,
      ordem: order,
      id_formulatio: data.formId,
    })

    setLoading(false)

    if (error) {
      console.error(error)
      return alert('Erro ao criar pergunta.')
    }

    onClose()
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova Pergunta</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-2'>
          <div className='grid gap-1'>
            <Label>Título</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='grid gap-1'>
            <Label>Código (opcional)</Label>
            <Input value={code} onChange={(e) => setCode(e.target.value)} />
          </div>

          <div className='grid gap-1'>
            <Label>Tipo de pergunta</Label>
            <Select value={questionType} onValueChange={setQuestionType}>
              <SelectTrigger>
                <SelectValue placeholder='Selecione o tipo' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='texto'>Texto</SelectItem>
                <SelectItem value='alternativa'>Alternativa</SelectItem>
                <SelectItem value='multipla'>Múltipla escolha</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='grid gap-1'>
            <Label>Orientação (opcional)</Label>
            <Textarea
              value={orientation}
              onChange={(e) => setOrientation(e.target.value)}
            />
          </div>

          <div className='flex items-center gap-2'>
            <Checkbox
              id='obrigatoria'
              checked={required}
              onCheckedChange={(v) => setRequired(Boolean(v))}
            />
            <Label htmlFor='obrigatoria'>Obrigatória</Label>
          </div>

          <div className='flex items-center gap-2'>
            <Checkbox
              id='sub'
              checked={subQuestion}
              onCheckedChange={(v) => setSubQuestion(Boolean(v))}
            />
            <Label htmlFor='sub'>Subpergunta</Label>
          </div>

          <div className='grid gap-1'>
            <Label>Ordem</Label>
            <Input
              type='number'
              value={order}
              onChange={(e) => setOrder(Number(e.target.value))}
            />
          </div>

          <Button disabled={loading} onClick={handleCreate}>
            {loading ? 'Salvando...' : 'Criar pergunta'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
