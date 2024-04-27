import { cleanup, render } from '@testing-library/react'

import Header from '.'

describe('Header Component', () => {
  afterEach(cleanup)

  test('renders the header component correctly', () => {
    const { getByTestId } = render(<Header />)
    expect(getByTestId('logo-test')).toBeInTheDocument()
    expect(getByTestId('title-test')).toBeInTheDocument()
  })
})
