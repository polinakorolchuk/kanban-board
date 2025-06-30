export type Card = {
  id: number
  title: string
  description: string
  priority?: 'low' | 'medium' | 'high'
}

export type Column = {
  id: string
  title: string
  color: string
  cards: Card[]
}

export interface BoardState {
  columns: Column[]
}

export interface AddCardFormProps {
  columnId: string
  onCancel?: () => void
  initialData?: Card
  onSave?: () => void
}
