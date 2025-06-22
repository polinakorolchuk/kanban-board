import { Component, ReactNode } from 'react'

import { ErrorContainer, ErrorDetails } from './styled'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  render() {
    const { hasError, error } = this.state

    if (hasError && error) {
      return (
        <ErrorContainer>
          <h2>Что-то пошло не так.</h2>
          <ErrorDetails>
            <summary>Подробнее</summary>
            {error.message}
          </ErrorDetails>
        </ErrorContainer>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
