import styled from 'styled-components'

export const CardWrapper = styled.div`
  width: 270px;
  height: 135px;
  padding: 12px;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  background-color: white;

  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;

  margin-bottom: 3px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 390px) {
    width: 100%;
    max-width: 100%;
  }
`

export const CardTitle = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #000000;
  margin: 0;
`

export const CardDescription = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #334155;
  margin: 0;
`

export const PriorityBadge = styled.span<{ color: string; bgColor: string }>`
  display: inline-flex;
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 1234px;
  width: fit-content;
  text-transform: capitalize;
  align-items: center;
`
