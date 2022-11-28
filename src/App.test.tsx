import { render, screen } from '@testing-library/react'
import App from './App'

test('renders spooky skelly', () => {
  render(<App />)
  const spookyEl = screen.getByText(/💀/i)
  expect(spookyEl).toBeInTheDocument()
})
