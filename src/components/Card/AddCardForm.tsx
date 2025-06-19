import { addCard, Card } from '@store/reducers/BoardSlice'
import React, { useState } from 'react'
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
}

const AddCardForm: React.FC<AddCardFormProps> = ({ columnId, onCancel }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high' | ''>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    const newCard: Card = {
      id: Date.now(),
      title,
      description
    }

    // Добавим priority только если оно выбрано
    if (priority !== '') {
      newCard.priority = priority
    }

    dispatch(
      addCard({
        columnId,
        card: newCard
      })
    )

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
        <SubmitButton type="submit">Add</SubmitButton>
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
