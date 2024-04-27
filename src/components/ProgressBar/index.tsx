'use client'

import { useMemo } from 'react'

import classNames from '@/lib/classNames'

type ProgressBarProps = {
  value?: number
}

export default function ProgressBar({ value = 0 }: ProgressBarProps) {
  const { width, isFull } = useMemo(() => {
    return {
      width: `${value}%`,
      isFull: value === 100
    }
  }, [value])

  return (
    <div className="relative w-full overflow-hidden rounded-full bg-slate-300">
      <div
        className={classNames('h-2 text-right', isFull ? 'bg-pink-500' : 'bg-gray-500')}
        style={{ width }}
      />
    </div>
  )
}
