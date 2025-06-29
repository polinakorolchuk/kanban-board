import EditIcon from '@components/Icons/EditIcon'
import TrashIcon from '@components/Icons/TrashIcon'
import React from 'react'

import {
  CardActionButton,
  CardActions,
  CardDescription,
  CardTitle,
  CardWrapper,
  PriorityBadge
} from './styled'

interface CardProps {
  id: number
  columnId: string
  title: string
  description: string
  priority?: 'low' | 'medium' | 'high'
  onEdit?: () => void
  onDelete?: () => void
  onTouchStart?: (e: React.TouchEvent<HTMLDivElement>) => void
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void
}

const priorityColors = {
  low: { text: '#22C55E', bg: 'rgba(34, 197, 94, 0.1)' },
  medium: { text: '#4F46E5', bg: 'rgba(79, 70, 229, 0.1)' },
  high: { text: '#F43F5E', bg: 'rgba(244, 63, 94, 0.1)' }
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  priority,
  onEdit,
  onDelete,
  onDragStart,
  onTouchStart
}) => {
  return (
    <CardWrapper draggable onDragStart={onDragStart} onTouchStart={onTouchStart}>
      {priority && (
        <PriorityBadge color={priorityColors[priority].text} bgColor={priorityColors[priority].bg}>
          {priority}
        </PriorityBadge>
      )}

      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>

      <CardActions>
        <CardActionButton onClick={onEdit} variant="edit" aria-label="Edit">
          <EditIcon />
          <span className="label">Edit card</span>
        </CardActionButton>
        <CardActionButton onClick={onDelete} variant="delete" aria-label="Delete">
          <TrashIcon />
          <span className="label">Delete card</span>
        </CardActionButton>
      </CardActions>
    </CardWrapper>
  )
}

export default Card
