import styled from 'styled-components'

export const HeaderWrapper = styled.header`
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
    justify-content: flex-start;
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
