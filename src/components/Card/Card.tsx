import React from 'react'

import { CardDescription, CardTitle, CardWrapper, PriorityBadge } from './styled'

interface CardProps {
  id: number
  title: string
  description: string
  priority?: 'low' | 'medium' | 'high'
  columnId: string
}

const priorityColors = {
  low: { text: '#22C55E', bg: 'rgba(34, 197, 94, 0.1)' },
  medium: { text: '#4F46E5', bg: 'rgba(79, 70, 229, 0.1)' },
  high: { text: '#F43F5E', bg: 'rgba(244, 63, 94, 0.1)' }
}

const Card: React.FC<CardProps> = ({ id, title, description, priority, columnId }) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('cardId', id.toString())
    e.dataTransfer.setData('sourceColumnId', columnId)
  }

  return (
    <CardWrapper draggable onDragStart={handleDragStart}>
      {priority && ['low', 'medium', 'high'].includes(priority) && (
        <PriorityBadge color={priorityColors[priority].text} bgColor={priorityColors[priority].bg}>
          {priority}
        </PriorityBadge>
      )}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardWrapper>
  )
}

export default Card
