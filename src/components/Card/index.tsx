import Image from 'next/image'

import { formatPercentage } from '@/lib/formatPercentage'
import { Donation } from '@/types/donation'

import ProgressBar from '../ProgressBar'

type CardProps = {
  data: Donation
}

export default function Card({ data }: CardProps) {
  return (
    <div data-testid="card-test">
      <div className="relative mb-2 h-64 w-full overflow-hidden">
        <Image
          src={data?.image}
          alt={data?.title}
          className="object-cover"
          fill
          priority
          sizes="100%"
        />
      </div>
      <h2 className="mb-2 h-auto text-xl capitalize antialiased sm:mb-0 sm:h-16">
        <strong>{data?.title}</strong>
      </h2>
      <ProgressBar value={formatPercentage(data?.donation_percentage)} />
      <div className="mt-2 flex items-center justify-between gap-2">
        <div className="flex flex-col">
          <h6 className="font-semibold">Terkumpul</h6>
          <p>Rp. {Intl?.NumberFormat('id-ID')?.format(Number(data?.donation_received))}</p>
        </div>
        <div className="flex flex-col">
          <h6 className="font-semibold">Sisa Hari</h6>
          <p className="text-right">{data?.days_remaining}</p>
        </div>
      </div>
    </div>
  )
}
