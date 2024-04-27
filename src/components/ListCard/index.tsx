'use client'
import { useMemo } from 'react'

import useFilter from '@/store/filter'
import { Donation } from '@/types/donation'

import Card from '../Card'

type ListCardProps = {
  list?: Array<Donation>
}

export default function ListCard({ list = [] }: ListCardProps) {
  const { sort } = useFilter()

  const sortedList = useMemo(() => {
    const isSorted = sort !== 'default'
    const sortByDaysLeft = list?.sort((a, b) => a.days_remaining - b.days_remaining)
    const newList = Array.from(sortByDaysLeft)

    if (isSorted) {
      return newList?.sort((a, b) => {
        const goalA = a?.donation_target
        const goalB = b?.donation_target
        if (sort === 'asc') {
          return goalA - goalB
        }

        return goalB - goalA
      })
    }

    return newList
  }, [list, sort])

  return (
    <div
      data-testid="list-card-test"
      className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {sortedList?.map((item) => <Card key={item?.title} data={item} />)}
    </div>
  )
}
