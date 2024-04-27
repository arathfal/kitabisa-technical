import { cleanup, render } from '@testing-library/react'

import Button from '.'

const renderButton = ({ className = '', text = '' }) => ({
  ...render(
    <Button className={className} data-testid="button-test">
      {text}
    </Button>
  )
})

describe('Button Component', () => {
  afterEach(cleanup)

  test('should render with text "Button Test"', () => {
    const { asFragment } = renderButton({
      text: 'Button Test'
    })
    expect(asFragment()).toMatchSnapshot()
  })

  test('should render with class contain "bg-pink-400"', () => {
    const { asFragment } = renderButton({
      text: 'Button Test',
      className: 'bg-pink-400'
    })
    expect(asFragment()).toMatchSnapshot()
  })
})
