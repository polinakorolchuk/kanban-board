import React, { useState } from 'react'

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
  onMouseDown?: (e: React.MouseEvent) => void
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
  onMouseDown
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <CardWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={onMouseDown}
    >
      {priority && (
        <PriorityBadge color={priorityColors[priority].text} bgColor={priorityColors[priority].bg}>
          {priority}
        </PriorityBadge>
      )}

      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>

      {isHovered && (
        <CardActions>
          <CardActionButton onClick={onEdit}>✏️</CardActionButton>
          <CardActionButton onClick={onDelete}>🗑</CardActionButton>
        </CardActions>
      )}
    </CardWrapper>
  )
}

export default Card
