import { cleanup, render } from '@testing-library/react'

import Card from '.'

const mock = {
  id: 94597,
  order: 1,
  parent_project_id: 0,
  title: '#BisaBangkit Bersama Kitabisa',
  expired: 2147483647,
  image: 'https://img.staging.kitabisa.cc/size/664x357/0f9a7205-79ef-49c9-a95a-49347fbd00a6.jpg',
  days_remaining: 0,
  donation_received: 178613497,
  campaigner: 'Kitabisa.com',
  campaigner_type: 'PERSONAL',
  campaigner_badge: 'https://assets.kitabisa.com/images/icon__verified-user.svg',
  campaigner_is_verified: true,
  category_name: 'Bencana Alam',
  is_forever_running: true,
  is_open_goal: false,
  request_userdata: false,
  donation_target: 500000000,
  donation_percentage: 0.357227,
  short_url: 'bisabangkit',
  is_featured: 0,
  custom_fb_pixel: ''
}

describe('Card Component', () => {
  afterEach(cleanup)

  test('renders the card component correctly', () => {
    const { getByTestId, asFragment } = render(<Card data={mock} />)

    expect(getByTestId('card-test')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})
