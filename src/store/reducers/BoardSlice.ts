import { COLUMN_COLORS } from '@constants/Colors'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Card = {
  id: number
  title: string
  description: string
  priority?: 'low' | 'medium' | 'high'
}

type Column = {
  id: string
  title: string
  color: string
  cards: Card[]
}

interface BoardState {
  columns: Column[]
}

function getUnusedColor(usedColors: string[]): string {
  const available = COLUMN_COLORS.filter((color) => !usedColors.includes(color))
  if (available.length === 0) {
    return COLUMN_COLORS[Math.floor(Math.random() * COLUMN_COLORS.length)]
  }
  return available[Math.floor(Math.random() * available.length)]
}

const initialState: BoardState = {
  columns: [
    {
      id: 'todo',
      title: 'To Do',
      color: '#4F46E5',
      cards: [
        { id: 1, title: 'Task 1', description: 'Task description 1', priority: 'high' },
        { id: 2, title: 'Task 2', description: 'Task description 2', priority: 'medium' }
      ]
    },
    {
      id: 'inprogress',
      title: 'In Progress',
      color: '#F59E0B',
      cards: [{ id: 3, title: 'Task 3', description: 'Task description 3', priority: 'low' }]
    },
    {
      id: 'done',
      title: 'Done',
      color: '#22C55E',
      cards: [{ id: 4, title: 'Task 4', description: 'Task description 4', priority: 'medium' }]
    }
  ]
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addColumn: (state) => {
      const usedColors = state.columns.map((col) => col.color)
      const newColor = getUnusedColor(usedColors)

      const newColumn: Column = {
        id: `${Date.now()}`,
        title: 'New Column',
        color: newColor,
        cards: []
      }

      state.columns.push(newColumn)
    },

    updateColumnTitle: (state, action: PayloadAction<{ columnId: string; newTitle: string }>) => {
      const { columnId, newTitle } = action.payload
      const column = state.columns.find((col) => col.id === columnId)
      if (column) {
        column.title = newTitle
      }
    },

    deleteColumn: (state, action: PayloadAction<string>) => {
      state.columns = state.columns.filter((col) => col.id !== action.payload)
    },

    addCard: (state, action: PayloadAction<{ columnId: string; card: Card }>) => {
      const { columnId, card } = action.payload
      const column = state.columns.find((col) => col.id === columnId)
      if (column) {
        column.cards.push(card)
      }
    },

    updateCard: (
      state,
      action: PayloadAction<{ columnId: string; cardId: number; updatedCard: Partial<Card> }>
    ) => {
      const { columnId, cardId, updatedCard } = action.payload
      const column = state.columns.find((col) => col.id === columnId)
      if (column) {
        const cardIndex = column.cards.findIndex((c) => c.id === cardId)
        if (cardIndex !== -1) {
          column.cards[cardIndex] = { ...column.cards[cardIndex], ...updatedCard }
        }
      }
    },

    deleteCard: (state, action: PayloadAction<{ columnId: string; cardId: number }>) => {
      const { columnId, cardId } = action.payload
      const column = state.columns.find((col) => col.id === columnId)
      if (column) {
        column.cards = column.cards.filter((c) => c.id !== cardId)
      }
    },

    moveCard: (
      state,
      action: PayloadAction<{
        sourceColumnId: string
        targetColumnId: string
        cardId: number
        targetIndex?: number
      }>
    ) => {
      const { sourceColumnId, targetColumnId, cardId, targetIndex } = action.payload
      const sourceColumn = state.columns.find((col) => col.id === sourceColumnId)
      const targetColumn = state.columns.find((col) => col.id === targetColumnId)
      if (!sourceColumn || !targetColumn) return

      const cardIndex = sourceColumn.cards.findIndex((c) => c.id === cardId)
      if (cardIndex === -1) return

      const [movedCard] = sourceColumn.cards.splice(cardIndex, 1)

      if (sourceColumnId === targetColumnId && typeof targetIndex === 'number') {
        let insertIndex = targetIndex
        if (targetIndex > cardIndex) {
          insertIndex = targetIndex - 1
        }
        targetColumn.cards.splice(insertIndex, 0, movedCard)
      } else if (typeof targetIndex === 'number') {
        targetColumn.cards.splice(targetIndex, 0, movedCard)
      } else {
        targetColumn.cards.push(movedCard)
      }
    }
  }
})

export default boardSlice.reducer
export const {
  addColumn,
  deleteColumn,
  addCard,
  updateCard,
  deleteCard,
  moveCard,
  updateColumnTitle
} = boardSlice.actions
