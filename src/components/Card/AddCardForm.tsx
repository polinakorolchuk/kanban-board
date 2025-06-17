import { addCard } from '@store/reducers/BoardSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

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

    dispatch(
      addCard({
        columnId,
        card: {
          id: Date.now(),
          title,
          description,
          priority: priority || undefined
        }
      })
    )

    // Сброс полей
    setTitle('')
    setDescription('')
    setPriority('')

    // Закрыть форму если передан onCancel
    if (onCancel) onCancel()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <label htmlFor="priority">Priority</label>
      <select
        id="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high' | '')}
      >
        <option value="">No Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <div style={{ marginTop: '8px' }}>
        <button type="submit">Add</button>
        {onCancel && (
          <button type="button" onClick={onCancel} style={{ marginLeft: '8px' }}>
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}

export default AddCardForm
