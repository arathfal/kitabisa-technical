import ListCard from '@/components/ListCard'
import getDonations from '@/server/getDonations'

export default async function Home() {
  const donation = await getDonations()

  return (
    <main>
      <ListCard list={donation?.data} />
    </main>
  )
}
