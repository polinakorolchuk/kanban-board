import Column from '@components/Column/Column'
import { useAppDispatch, useAppSelector } from '@hooks/UseTypedHooks'
import { deleteColumn } from '@store/reducers/BoardSlice'

import { BoardWrapper } from './styled'

const Board = () => {
  const columns = useAppSelector((state) => state.board.columns)
  const dispatch = useAppDispatch()

  return (
    <BoardWrapper>
      {columns.map((column) => (
        <Column
          key={column.id}
          columnId={column.id}
          title={column.title}
          color={column.color}
          cards={column.cards} // ← вот тут больше нет подстановки 'low'
          onDelete={() => dispatch(deleteColumn(column.id))}
        />
      ))}
    </BoardWrapper>
  )
}

export default Board
