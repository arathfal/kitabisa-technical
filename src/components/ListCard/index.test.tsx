import { cleanup, render } from '@testing-library/react'

import ListCard from '.'

const mock = [
  {
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
  },
  {
    id: 29755,
    order: 2,
    parent_project_id: 0,
    title: 'ponpes al-muawanah tasikmalaya kebakaran',
    expired: 2147483647,
    image:
      'https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/29755/31__1489611820_67821505206_f.jpg',
    days_remaining: 0,
    donation_received: 600711,
    campaigner: 'Saepul Aziz',
    campaigner_type: 'PERSONAL',
    campaigner_badge: '',
    campaigner_is_verified: false,
    category_name: 'Bencana Alam',
    is_forever_running: true,
    is_open_goal: false,
    request_userdata: false,
    donation_target: 300000000,
    donation_percentage: 0.00200237,
    short_url: 'bantuankebakaran',
    is_featured: 0,
    custom_fb_pixel: ''
  }
]

const mockSetSort = jest.fn()

jest.mock('@/store/filter', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    sort: 'asc',
    setSort: mockSetSort
  }))
}))

describe('ListCard Component', () => {
  beforeEach(() => mockSetSort.mockClear())
  afterEach(cleanup)

  test('renders the list-card-test component correctly', () => {
    const { getByTestId, asFragment } = render(<ListCard list={mock} />)

    expect(getByTestId('list-card-test')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})
