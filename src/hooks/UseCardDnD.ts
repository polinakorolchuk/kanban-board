import { useAppDispatch } from '@hooks/UseTypedHooks'
import { moveCard } from '@store/reducers/BoardSlice'
import { dragState } from '@utils/DragState'

export const useCardDnD = (columnId: string) => {
  const dispatch = useAppDispatch()

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, cardId: number) => {
    dragState.set(cardId, columnId)
    e.dataTransfer.setData('cardId', cardId.toString())
    e.dataTransfer.setData('sourceColumnId', columnId)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const cardId = dragState.getCardId()
    const sourceColumnId = dragState.getSourceColumnId()

    if (cardId !== null && sourceColumnId && sourceColumnId !== columnId) {
      dispatch(moveCard({ sourceColumnId, targetColumnId: columnId, cardId }))
    }

    dragState.clear()
  }

  const handleTouchStart = (_: React.TouchEvent<HTMLDivElement>, cardId: number) => {
    dragState.set(cardId, columnId)
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.changedTouches[0]
    const targetElem = document.elementFromPoint(touch.clientX, touch.clientY)
    const targetColumn = targetElem?.closest('[data-column-id]')?.getAttribute('data-column-id')

    const cardId = dragState.getCardId()
    const sourceColumnId = dragState.getSourceColumnId()

    if (cardId !== null && sourceColumnId && targetColumn && sourceColumnId !== targetColumn) {
      dispatch(
        moveCard({
          sourceColumnId,
          targetColumnId: targetColumn,
          cardId
        })
      )
    }

    dragState.clear()
  }

  return {
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleTouchStart,
    handleTouchEnd
  }
}
