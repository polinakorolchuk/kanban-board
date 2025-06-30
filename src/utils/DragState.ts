let draggedCardId: number | null = null
let draggedSourceColumnId: string | null = null

export const dragState = {
  getCardId: () => draggedCardId,
  getSourceColumnId: () => draggedSourceColumnId,

  set: (cardId: number, sourceColumnId: string) => {
    draggedCardId = cardId
    draggedSourceColumnId = sourceColumnId
  },

  clear: () => {
    draggedCardId = null
    draggedSourceColumnId = null
  }
}
