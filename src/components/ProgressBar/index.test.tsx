import { cleanup, render } from '@testing-library/react'

import ProgressBar from '.'

const renderProgressBar = (value = 0) => ({
  ...render(<ProgressBar value={value} />)
})

describe('ProgressBar Component', () => {
  afterEach(cleanup)

  test('should render with text value 0', () => {
    const { asFragment } = renderProgressBar()
    expect(asFragment()).toMatchSnapshot()
  })

  test('should render with text value 100', () => {
    const { asFragment } = renderProgressBar(100)
    expect(asFragment()).toMatchSnapshot()
  })
})
