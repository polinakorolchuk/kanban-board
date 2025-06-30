import styled from 'styled-components'

export const ThemeSwitcherWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 10px 14px;
  position: fixed;
  bottom: 16px;
  left: 16px;
  z-index: 10;

  background: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  font-family: 'Plus Jakarta Sans', sans-serif;
`

export const ThemeButton = styled.button<{ active?: boolean }>`
  padding: 8px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  border: none;
  border-radius: 999px;
  cursor: pointer;

  font-family: 'Plus Jakarta Sans', sans-serif;

  background-color: ${({ active, theme }) => (active ? theme.primaryColor : '#f1f5f9')};
  color: ${({ active }) => (active ? '#ffffff' : '#1e293b')};

  transition:
    background-color 0.25s ease,
    transform 0.15s ease;

  &:hover {
    background-color: ${({ active, theme }) => (active ? theme.primaryColor : '#e2e8f0')};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primaryColor};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`
