import styled from 'styled-components'

export const BoardWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  overflow-x: auto;
  background-color: #f8fafc;
  min-height: 100vh;
`

export const ColumnWrapper = styled.div`
  width: 300px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 390px) {
    width: 100%;
    flex-shrink: 1;
  }
`

export const ColumnContent = styled.div`
  background-color: #f8fafc;
  border-radius: 42px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  width: 100%;
  box-sizing: border-box;
  @media (max-width: 390px) {
    width: 100%;
    background-color: #f1f5f9;
  }
`

interface ColumnTitleProps {
  bgColor?: string
}

export const ColumnTitle = styled.div<ColumnTitleProps>`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.02em;

  transform: scaleY(0.95);
  transform-origin: bottom;

  color: white;
  padding: 8px;
  margin-bottom: 0.5rem;

  background-color: ${({ bgColor }) => bgColor || '#0f172a'};
  border-radius: 9999px;

  box-sizing: border-box;
`

export const AddTaskButton = styled.button<ColumnTitleProps>`
  width: 40px;
  height: 40px;

  background-color: ${({ bgColor }) => bgColor || '#0f172a'};
  border: none;
  border-radius: 50%;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  transition: background-color 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`

export const TitleWithBadge = styled.div`
  display: flex;
  align-items: center;
`

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const TaskCountBadge = styled.div<ColumnTitleProps>`
  width: 32px;
  height: 32px;
  background-color: white;
  color: ${({ bgColor }) => (bgColor ? `${hexToRgba(bgColor, 0.3)}` : 'rgba(15, 23, 42, 0.6)')};
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  font-weight: 300;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  flex-shrink: 0;
`

interface ColorProps {
  bgColor: string
}

export const AddTaskPlaceholder = styled.div<ColorProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 48px;
  padding: 8px;
  margin-top: 0.15rem;

  border: 1.5px solid #e2e8f0;
  border-radius: 9999px;
  background-color: white;
  width: 100%;

  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  span {
    background-color: ${({ bgColor }) => `${bgColor}1A`};
    color: ${({ bgColor }) => bgColor};
    padding: 4px 8px;
    border-radius: 1234px;
    font-size: 0.86rem;
    font-weight: 520;
    line-height: 1;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
`
