import AddCardForm from '@components/Card/AddCardForm'
import Card from '@components/Card/Card'
import AddIcon from '@components/Icons/AddIcon'
import TrashIcon from '@components/Icons/TrashIcon'
import { useEffect, useRef, useState } from 'react'

import {
  AddTaskButton,
  AddTaskPlaceholder,
  ColumnContent,
  ColumnTitle,
  ColumnWrapper,
  DeleteColumnButton,
  EditableInput,
  EditableTitle,
  TaskCountBadge,
  TitleWithBadge
} from './styled'

interface CardType {
  id: number
  title: string
  description: string
  priority: 'low' | 'medium' | 'high'
}

interface ColumnProps {
  columnId: string
  title: string
  color: string
  cards?: CardType[]
  onDelete?: () => void
}

const Column = ({ columnId, title, color, cards = [], onDelete }: ColumnProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editableTitle, setEditableTitle] = useState(title)
  const [isAddingCard, setIsAddingCard] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleTitleClick = () => {
    setIsEditing(true)
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableTitle(e.target.value)
  }

  const handleBlur = () => {
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setIsEditing(false)
    }
  }

  const handleAddTaskClick = () => {
    setIsAddingCard(true)
  }

  const handleCancelAddCard = () => {
    setIsAddingCard(false)
  }

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  return (
    <ColumnWrapper>
      <ColumnContent>
        <ColumnTitle bgColor={color}>
          <TitleWithBadge>
            <TaskCountBadge bgColor={color}>{cards.length}</TaskCountBadge>
            {isEditing ? (
              <EditableInput
                ref={inputRef}
                type="text"
                value={editableTitle}
                onChange={handleTitleChange}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
              />
            ) : (
              <EditableTitle onClick={handleTitleClick}>{editableTitle}</EditableTitle>
            )}
          </TitleWithBadge>

          <AddTaskButton bgColor={color} onClick={handleAddTaskClick} aria-label="Добавить задачу">
            <AddIcon />
          </AddTaskButton>
        </ColumnTitle>

        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}

        {isAddingCard ? (
          <AddCardForm columnId={columnId} onCancel={handleCancelAddCard} />
        ) : (
          <AddTaskPlaceholder bgColor={color} onClick={handleAddTaskClick}>
            <span>+ Add task...</span>
          </AddTaskPlaceholder>
        )}

        <DeleteColumnButton onClick={onDelete}>
          <TrashIcon />
          <span className="label">Delete column</span>
        </DeleteColumnButton>
      </ColumnContent>
    </ColumnWrapper>
  )
}

export default Column
