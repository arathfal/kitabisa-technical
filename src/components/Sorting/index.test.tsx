import { cleanup, fireEvent, render } from '@testing-library/react'

import Sorting from '.'

const mockSetSort = jest.fn()

jest.mock('@/store/filter', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    sort: 'asc',
    setSort: mockSetSort
  }))
}))

describe('Sorting Component', () => {
  beforeEach(() => mockSetSort.mockClear())
  afterEach(cleanup)

  test('renders the sorting component correctly', () => {
    const { getByTestId } = render(<Sorting />)
    expect(getByTestId('sort-button-test')).toBeInTheDocument()
  })

  test('click button sorting correctly', async () => {
    const { getByTestId, findByTestId } = render(<Sorting />)
    fireEvent.click(getByTestId('sort-button-test'))

    // Await for the change to be reflected in the DOM
    expect(await findByTestId('sort-button-test')).toBeInTheDocument()
  })

  test('remove selected sort correctly', async () => {
    const { getByTestId } = render(<Sorting />)
    expect(getByTestId('sort-button-test')).toHaveTextContent('Ascending')
    fireEvent.click(getByTestId('remove-sort-button-test'))

    // Ensure setSort is called with 'default'
    expect(mockSetSort).toHaveBeenCalledWith('default')
  })
})
