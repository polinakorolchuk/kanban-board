import { styled } from 'styled-components'

export const BoardWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  overflow-x: auto;
  background-color: #ffffff;
  height: calc(100vh - 64px);

  @media (max-width: 390px) {
    flex-direction: column;
    overflow-x: visible;
    overflow-y: auto;
    height: auto;
    padding: 0.5rem;
    background-color: transparent;
  }
`
