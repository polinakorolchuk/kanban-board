import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  background-color: #f8fafc;
  border-bottom: 1px solid #f8fafc;

  @media (max-width: 390px) {
    background-color: #ffffff;
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
  color: #1e293b;

  @media (max-width: 390px) {
    display: none;
  }
`

export const AddColumnButton = styled.button`
  width: 40px;
  height: 40px;

  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 50%;
  color: #475569;
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
    background-color: #e2e8f0;
    border-color: #94a3b8;
  }
`

export const BurgerButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 22px;
  cursor: pointer;
  color: #475569;

  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background-color: #e2e8f0;
    border-color: #94a3b8;
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
    background-color: #f8fafc;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    font-size: 14px;
    padding: 4px 10px;
    min-width: 130px;
    white-space: nowrap;
    color: #475569;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition:
      background-color 0.2s ease,
      border-color 0.2s ease;

    &:hover {
      background-color: #f8fafc;
      border-color: #94a3b8;
    }
  }
`
