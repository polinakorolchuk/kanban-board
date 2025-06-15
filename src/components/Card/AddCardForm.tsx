import React, { useState } from 'react'

interface AddCardFormProps {
  onAdd: (title: string, description: string, priority?: 'low' | 'medium' | 'high') => void
}

const AddCardForm: React.FC<AddCardFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high' | ''>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title) return
    onAdd(title, description, priority || undefined)
    setTitle('')
    setDescription('')
    setPriority('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Заголовок" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="priority">Приоритет</label>
      <select
        id="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high' | '')}
      >
        <option value="">Без приоритета</option>
        <option value="low">Низкий</option>
        <option value="medium">Средний</option>
        <option value="high">Высокий</option>
      </select>

      <button type="submit">Добавить</button>
    </form>
  )
}

export default AddCardForm
