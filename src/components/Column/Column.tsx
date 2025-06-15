import Card from '@components/Card/Card'

import {
  AddTaskButton,
  AddTaskPlaceholder,
  ColumnContent,
  ColumnTitle,
  ColumnWrapper,
  TaskCountBadge,
  TitleWithBadge
} from './styled'

interface CardType {
  id: number
  title: string
  description: string
  priority: 'low' | 'medium' | 'high'
}

interface ColumnProps {
  title: string
  color: string
  cards?: CardType[]
}

const Column = ({ title, color, cards = [] }: ColumnProps) => {
  const handleAddTask = () => {
    alert(`Добавление задачи в колонку "${title}" ещё не реализовано.`)
  }

  return (
    <ColumnWrapper>
      <ColumnContent>
        <ColumnTitle bgColor={color}>
          <TitleWithBadge>
            <TaskCountBadge bgColor={color}>{cards.length}</TaskCountBadge>
            {title}
          </TitleWithBadge>
          <AddTaskButton bgColor={color} onClick={handleAddTask} aria-label="Добавить задачу">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" y1="5" x2="12" y2="19" stroke="white" strokeWidth="1.5" />
              <line x1="5" y1="12" x2="19" y2="12" stroke="white" strokeWidth="1.5" />
            </svg>
          </AddTaskButton>
        </ColumnTitle>

        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}

        <AddTaskPlaceholder bgColor={color}>
          <span>+ Add task...</span>
        </AddTaskPlaceholder>
      </ColumnContent>
    </ColumnWrapper>
  )
}

export default Column
