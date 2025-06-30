export interface CardType {
  id: number
  title: string
  description: string
  priority?: 'low' | 'medium' | 'high'
}

export interface ColumnProps {
  columnId: string
  title: string
  color: string
  cards?: CardType[]
  onDelete?: () => void
}
