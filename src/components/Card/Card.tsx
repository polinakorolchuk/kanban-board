import EditIcon from '@components/Icons/EditIcon'
import TrashIcon from '@components/Icons/TrashIcon'
import { priorityColors } from '@constants/PriorityColors'
import React from 'react'

import {
  CardActionButton,
  CardActions,
  CardDescription,
  CardTitle,
  CardWrapper,
  PriorityBadge
} from './styled'
import { CardProps } from './Types'

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
