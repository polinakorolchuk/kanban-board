import styled from 'styled-components'

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.boardBackground};
  height: calc(100vh - 64px);
  box-sizing: border-box;

  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    height: auto;
    padding: 0.5rem;
    background-color: transparent;
  }
`
