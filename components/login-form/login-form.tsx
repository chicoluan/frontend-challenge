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
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { type FormEvent, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [formCode, setFormCode] = useState('')
  const [formType, setFormType] = useState<'newForm' | 'answerForm'>('newForm')
  const router = useRouter()

  const handleLoginForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ firstName, lastName, formType, formCode })
    if (formType === 'newForm') {
      router.push('/form')
    } else {
      // Load the Form Data is gonna be the last step
    }
  }

  const isValid =
    firstName.trim() &&
    lastName.trim() &&
    (formType === 'newForm' || (formType === 'answerForm' && formCode.trim()))

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Bem Vindo</CardTitle>
          <CardDescription>
            Digite seu nome + sobrenome para criar ou responder um formulário
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => handleLoginForm(e)}>
            <div className='flex w-full flex-col gap-6'>
              <div className='grid gap-3'>
                <Label htmlFor='fisrtName'>Nome*</Label>
                <Input
                  type='text'
                  id='fisrtName'
                  value={firstName}
                  className='w-full'
                  placeholder='Ex: Ivancley'
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Label htmlFor='lastName'>Sobrenome*</Label>
                <Input
                  type='text'
                  id='lastName'
                  value={lastName}
                  className='w-full'
                  placeholder='Ex: Brito'
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <RadioGroup
                onValueChange={(value) =>
                  setFormType(value as 'newForm' | 'answerForm')
                }
                defaultValue='newForm'
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='newForm' id='newForm' />
                  <Label htmlFor='newForm'>Novo formulário</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='answerForm' id='answerForm' />
                  <Label htmlFor='answerForm'>Responder formulário</Label>
                </div>
              </RadioGroup>
              <AnimatePresence>
                {formType === 'answerForm' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className='flex flex-col gap-2 w-full'
                  >
                    <Label htmlFor='form_code'>Código do Formulário:</Label>
                    <Input
                      type='text'
                      id='form_code'
                      value={formCode}
                      placeholder='Ex: Brito'
                      onChange={(e) => setFormCode(e.target.value)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <Button
                type='submit'
                disabled={!isValid}
                className='w-fit place-self-end-safe hover:cursor-pointer'
              >
                Avançar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
