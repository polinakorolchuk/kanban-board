import { PRIORITY_OPTIONS } from '@constants/Form'
import { addCard, updateCard } from '@store/reducers/BoardSlice'
import { AddCardFormProps, Card } from '@store/types/BoardTypes'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  CancelButton,
  FormActions,
  FormInput,
  FormLabel,
  FormSelect,
  FormTextarea,
  FormWrapper,
  SubmitButton,
  VisuallyHiddenText
} from './styled'

const AddCardForm: React.FC<AddCardFormProps> = ({ columnId, onCancel, initialData, onSave }) => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high' | ''>('')

  const isEditMode = Boolean(initialData)

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title)
      setDescription(initialData.description)
      setPriority(initialData.priority || '')
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    if (isEditMode && initialData) {
      dispatch(
        updateCard({
          columnId,
          cardId: initialData.id,
          updatedCard: {
            title,
            description,
            priority: priority || undefined
          }
        })
      )
      onSave?.()
    } else {
      const newCard: Card = {
        id: Date.now(),
        title,
        description,
        ...(priority && { priority })
      }
      dispatch(addCard({ columnId, card: newCard }))
    }

    setTitle('')
    setDescription('')
    setPriority('')
    onCancel?.()
  }

  return (
    <FormWrapper as="form" onSubmit={handleSubmit}>
      <FormInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        aria-label="Task title"
      />

      <FormTextarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        aria-label="Task description"
      />

      <div role="group" aria-labelledby="priority-label">
        <FormLabel id="priority-label" htmlFor="priority">
          Priority
        </FormLabel>
        <FormSelect
          id="priority"
          name="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value as typeof priority)}
          aria-labelledby="priority-label"
          aria-describedby="priority-help"
        >
          {PRIORITY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </FormSelect>
        <VisuallyHiddenText id="priority-help">Select task priority level</VisuallyHiddenText>
      </div>

      <FormActions>
        <SubmitButton type="submit" aria-label={isEditMode ? 'Save changes' : 'Add new card'}>
          {isEditMode ? 'Save' : 'Add'}
        </SubmitButton>
        {onCancel && (
          <CancelButton type="button" onClick={onCancel} aria-label="Cancel editing">
            Cancel
          </CancelButton>
        )}
      </FormActions>
    </FormWrapper>
  )
}

export default AddCardForm
