import styled from 'styled-components'

export const CardWrapper = styled.div`
  position: relative; /* ← ЭТО ГЛАВНОЕ */

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
export const CardActions = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
`

export const CardActionButton = styled.button<{ variant?: 'edit' | 'delete' }>`
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  overflow: hidden;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  svg {
    flex-shrink: 0;
    transition:
      transform 0.3s ease,
      color 0.3s ease;
    color: ${({ variant }) =>
      variant === 'delete' ? '#ef4444' : variant === 'edit' ? '#6366f1' : '#64748b'};
  }

  .label {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.775rem;
    font-weight: 500;
    color: ${({ variant }) =>
      variant === 'delete' ? '#b91c1c' : variant === 'edit' ? '#3730a3' : '#1e293b'};

    max-width: 0;
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;

    transition:
      max-width 0.3s ease,
      opacity 0.3s ease,
      color 0.3s ease;
  }

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'delete' ? '#fee2e2' : variant === 'edit' ? '#e0e7ff' : 'transparent'};

    svg {
      transform: translateX(-2px);
      color: ${({ variant }) =>
        variant === 'delete' ? '#b91c1c' : variant === 'edit' ? '#3730a3' : '#1e293b'};
    }

    .label {
      max-width: 100px;
      opacity: 1;
    }
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
  line-height: 1;
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

export const FormActions = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
`

export const SubmitButton = styled.button`
  padding: 6px 12px;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: #22c55e;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #16a34a;
  }
`

export const CancelButton = styled.button`
  padding: 6px 12px;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: #f87171;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ef4444;
  }
`

export const FormWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
  font-family: 'Plus Jakarta Sans', sans-serif;
`

export const FormInput = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 0.875rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
`

export const FormTextarea = styled.textarea`
  width: 98%;
  padding: 2px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 0.875rem;
  resize: vertical;
  font-family: 'Plus Jakarta Sans', sans-serif;
`

export const FormSelect = styled.select`
  padding: 8px 2.5rem 8px 8px; /* Увеличен правый padding для отступа от стрелки */
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 0.875rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: #f8fafc;
  color: #1f2937;
  appearance: none;

  background-image: url("data:image/svg+xml,%3Csvg fill='none' stroke='gray' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
`
