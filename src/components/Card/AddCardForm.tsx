import { addCard, Card, updateCard } from '@store/reducers/BoardSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  CancelButton,
  FormActions,
  FormInput,
  FormSelect,
  FormTextarea,
  FormWrapper,
  SubmitButton
} from './styled'

interface AddCardFormProps {
  columnId: string
  onCancel?: () => void
  initialData?: Card
  onSave?: () => void
}

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
      if (onSave) onSave()
    } else {
      const newCard: Card = {
        id: Date.now(),
        title,
        description
      }

      if (priority !== '') {
        newCard.priority = priority
      }

      dispatch(
        addCard({
          columnId,
          card: newCard
        })
      )
    }

    setTitle('')
    setDescription('')
    setPriority('')
    if (onCancel) onCancel()
  }

  return (
    <FormWrapper as="form" onSubmit={handleSubmit}>
      <FormInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />

      <FormTextarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <div>
        <FormSelect
          id="priority"
          name="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high' | '')}
        >
          <option value="">No Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </FormSelect>
      </div>

      <FormActions>
        <SubmitButton type="submit">{isEditMode ? 'Save' : 'Add'}</SubmitButton>
        {onCancel && (
          <CancelButton type="button" onClick={onCancel}>
            Cancel
          </CancelButton>
        )}
      </FormActions>
    </FormWrapper>
  )
}

export default AddCardForm
