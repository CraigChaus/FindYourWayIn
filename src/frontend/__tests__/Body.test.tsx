
import { render, screen } from '@testing-library/react'
import Body from '../components/global/bottom-slider/Body'
import '@testing-library/jest-dom'

describe('ContactDetails', () => {
  it('renders a contact', () => {
    render(<Body header="Header" description="Description" />)

    const header = screen.getByText('Header');
    const description = screen.getByText('Description');
    expect(header).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})