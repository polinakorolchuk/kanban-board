export interface CardProps {
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
