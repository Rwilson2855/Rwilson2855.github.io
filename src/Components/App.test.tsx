import { render, screen } from '@testing-library/react'
import App from './App'
import { describe, it, expect } from 'vitest'
describe('App', () => {
  it('renders the App component', () => {
    render(<App />)

     //screen.debug(); // prints out the jsx in the App component unto the command line
  })
})