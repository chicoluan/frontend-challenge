'use client'

import QuestionDialog from '@/app/form/components/question-dialog/question-dialog'
import { useMountedState } from 'react-use'

export const DialogProvider = () => {
  const isMounted = useMountedState()

  if (!isMounted) {
    return null
  }

  return (
    <>
      <QuestionDialog />
    </>
  )
}
