import { COLUMN_COLORS } from '@constants/Colors'
import { createSlice } from '@reduxjs/toolkit'

// Типы
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

// Вспомогательная функция для получения неиспользованного цвета
function getUnusedColor(usedColors: string[]): string {
  const available = COLUMN_COLORS.filter((color) => !usedColors.includes(color))
  if (available.length === 0) {
    return COLUMN_COLORS[Math.floor(Math.random() * COLUMN_COLORS.length)]
  }
  return available[Math.floor(Math.random() * available.length)]
}

// Начальное состояние
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

// Slice
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
    deleteColumn: (state, action) => {
      state.columns = state.columns.filter((col) => col.id !== action.payload)
    },
    addCard: (state, action) => {
      const { columnId, card } = action.payload
      const column = state.columns.find((col) => col.id === columnId)
      if (column) {
        column.cards.push(card)
      }
    },
    updateCard: (state, action) => {
      const { columnId, cardId, updatedCard } = action.payload
      const column = state.columns.find((col) => col.id === columnId)
      if (column) {
        const cardIndex = column.cards.findIndex((c) => c.id === cardId)
        if (cardIndex !== -1) {
          column.cards[cardIndex] = { ...column.cards[cardIndex], ...updatedCard }
        }
      }
    },
    deleteCard: (state, action) => {
      const { columnId, cardId } = action.payload
      const column = state.columns.find((col) => col.id === columnId)
      if (column) {
        column.cards = column.cards.filter((c) => c.id !== cardId)
      }
    },
    moveCard: (state, action) => {
      const { sourceColumnId, targetColumnId, cardId } = action.payload
      if (sourceColumnId === targetColumnId) return

      const sourceColumn = state.columns.find((col) => col.id === sourceColumnId)
      const targetColumn = state.columns.find((col) => col.id === targetColumnId)
      if (!sourceColumn || !targetColumn) return

      const cardIndex = sourceColumn.cards.findIndex((c) => c.id === cardId)
      if (cardIndex === -1) return

      const [movedCard] = sourceColumn.cards.splice(cardIndex, 1)
      targetColumn.cards.push(movedCard)
    }
  }
})

// Экспорт
export default boardSlice.reducer
export const { addColumn, deleteColumn, addCard, updateCard, deleteCard, moveCard } =
  boardSlice.actions
