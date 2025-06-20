import AddCardForm from '@components/Card/AddCardForm'
import Card from '@components/Card/Card'
import AddIcon from '@components/Icons/AddIcon'
import TrashIcon from '@components/Icons/TrashIcon'
import { useAppDispatch } from '@hooks/UseTypedHooks'
import { deleteCard, moveCard } from '@store/reducers/BoardSlice'
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
  priority?: 'low' | 'medium' | 'high'
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
  const [editingCardId, setEditingCardId] = useState<number | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useAppDispatch()

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

  const handleEditCard = (cardId: number) => {
    setEditingCardId(cardId)
  }

  const handleCancelEditCard = () => {
    setEditingCardId(null)
  }

  const handleDeleteCard = (cardId: number) => {
    dispatch(deleteCard({ columnId, cardId }))
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const cardId = Number(e.dataTransfer.getData('cardId'))
    const sourceColumnId = e.dataTransfer.getData('sourceColumnId')

    if (sourceColumnId && cardId && sourceColumnId !== columnId) {
      dispatch(moveCard({ sourceColumnId, targetColumnId: columnId, cardId }))
    }
  }

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  return (
    <ColumnWrapper onDrop={handleDrop} onDragOver={handleDragOver} data-column-id={columnId}>
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

        {cards.map((card) =>
          editingCardId === card.id ? (
            <AddCardForm
              key={card.id}
              columnId={columnId}
              initialData={card}
              onCancel={handleCancelEditCard}
              onSave={() => setEditingCardId(null)}
            />
          ) : (
            <Card
              key={card.id}
              {...card}
              columnId={columnId}
              onEdit={() => handleEditCard(card.id)}
              onDelete={() => handleDeleteCard(card.id)}
            />
          )
        )}

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
