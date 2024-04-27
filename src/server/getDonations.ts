import { DonationResponse } from '@/types/donation'

export default async function getDonations(): Promise<DonationResponse> {
  const res = await fetch(
    'https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json'
  )
  const json = await res.json()

  return json
}
