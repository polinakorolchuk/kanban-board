import { createSlice } from '@reduxjs/toolkit'

// Типы
type Card = {
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
    // Добавить колонку с дефолтным названием и цветом
    addColumn: (state) => {
      const newColumn: Column = {
        id: `${Date.now()}`,
        title: 'New Column',
        color: '#CCCCCC',
        cards: []
      }
      state.columns.push(newColumn)
    }
  }
})

// Экспорт
export const { addColumn } = boardSlice.actions
export default boardSlice.reducer
