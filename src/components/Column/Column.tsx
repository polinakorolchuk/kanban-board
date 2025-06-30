import AddCardForm from '@components/Card/AddCardForm'
import Card from '@components/Card/Card'
import AddIcon from '@components/Icons/AddIcon'
import TrashIcon from '@components/Icons/TrashIcon'
import { useCardDnD } from '@hooks/UseCardDnD'
import { useAppDispatch } from '@hooks/UseTypedHooks'
import { deleteCard, updateColumnTitle } from '@store/reducers/BoardSlice'
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
import { ColumnProps } from './Types'

const Column = ({ columnId, title, color, cards = [], onDelete }: ColumnProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editableTitle, setEditableTitle] = useState(title)
  const [isAddingCard, setIsAddingCard] = useState(false)
  const [editingCardId, setEditingCardId] = useState<number | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useAppDispatch()
  const { handleDragStart, handleDragOver, handleDrop, handleTouchStart, handleTouchEnd } =
    useCardDnD(columnId)

  const handleTitleClick = () => setIsEditing(true)

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableTitle(e.target.value)
  }

  const finishEditingTitle = () => {
    setIsEditing(false)
    if (editableTitle.trim() && editableTitle !== title) {
      dispatch(updateColumnTitle({ columnId, newTitle: editableTitle.trim() }))
    }
  }

  const handleBlur = () => finishEditingTitle()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      finishEditingTitle()
    }
  }

  const handleAddTaskClick = () => setIsAddingCard(true)
  const handleCancelAddCard = () => setIsAddingCard(false)
  const handleEditCard = (cardId: number) => setEditingCardId(cardId)
  const handleCancelEditCard = () => setEditingCardId(null)

  const handleDeleteCard = (cardId: number) => {
    dispatch(deleteCard({ columnId, cardId }))
  }

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  return (
    <ColumnWrapper
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onTouchEnd={handleTouchEnd}
      data-column-id={columnId}
    >
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
            <div
              key={card.id}
              draggable
              onDragStart={(e) => handleDragStart(e, card.id)}
              onTouchStart={(e) => handleTouchStart(e, card.id)}
            >
              <Card
                {...card}
                columnId={columnId}
                onEdit={() => handleEditCard(card.id)}
                onDelete={() => handleDeleteCard(card.id)}
              />
            </div>
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
