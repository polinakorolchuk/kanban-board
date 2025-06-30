import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.headerBackground};

  /* Удалить эту строку: */
  /* border-bottom: 1px solid ${({ theme }) => theme.cardBorder}; */

  @media (max-width: 390px) {
    background-color: ${({ theme }) => theme.headerBackground};
  }
`

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1005px;
  min-height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  padding: 32px 40px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }

  @media (max-width: 390px) {
    padding: 20px 12px;
    justify-content: space-between;
  }

  .desktop-only {
    display: inline-flex;

    @media (max-width: 390px) {
      display: none;
    }
  }

  .mobile-only {
    display: none;

    @media (max-width: 390px) {
      display: inline-flex;
    }
  }
`

export const Logo = styled.h1`
  margin: 0;
  font-size: 27px;
  line-height: 10px;
  font-weight: 700;
  letter-spacing: -0.02em;
  font-family: 'Plus Jakarta Sans', sans-serif;
  transform: scaleY(0.98);
  transform-origin: bottom;
  color: ${({ theme }) => theme.text};

  @media (max-width: 390px) {
    display: none;
  }
`

export const AddColumnButton = styled.button`
  width: 40px;
  height: 40px;

  background-color: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 50%;
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    border-color: ${({ theme }) => theme.primaryColor};
    color: #fff;
  }
`

export const BurgerButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 8px;
  font-size: 22px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    border-color: ${({ theme }) => theme.primaryColor};
    color: #fff;
  }
`

export const MobileMenuWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const MobileActions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0;
  z-index: 999;

  button {
    background-color: ${({ theme }) => theme.cardBackground};
    border: 1px solid ${({ theme }) => theme.cardBorder};
    border-radius: 6px;
    font-size: 14px;
    padding: 4px 10px;
    min-width: 130px;
    white-space: nowrap;
    color: ${({ theme }) => theme.text};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition:
      background-color 0.2s ease,
      border-color 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.primaryColor};
      border-color: ${({ theme }) => theme.primaryColor};
      color: #fff;
    }
  }
`
