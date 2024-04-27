'use client'

import { MouseEventHandler, useCallback, useMemo, useState } from 'react'

import useFilter from '@/store/useFilter'
import { SortType } from '@/types/filter'

import Button from '../Button'

export default function Sorting() {
  const { sort, setSort } = useFilter()
  const isDefault = sort === 'default'
  const [showOption, setShowOption] = useState<boolean>(false)

  const onSelectSort = useCallback(
    (value: SortType) => {
      setSort(value)
      setShowOption(false)
    },
    [setSort, setShowOption]
  )

  const onRemoveSort: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.stopPropagation()
      onSelectSort('default')
    },
    [onSelectSort]
  )

  const buttonText = useMemo(() => {
    switch (sort) {
      case 'asc':
        return 'Ascending'
      case 'desc':
        return 'Descending'
      default:
        return 'Sorting by Donation Goal'
    }
  }, [sort])

  return (
    <div className="relative w-52">
      <div className="relative w-full rounded-md border border-slate-300 bg-white p-2 transition-all hover:bg-slate-300">
        <button onClick={() => setShowOption(true)} className="w-full text-left text-sm">
          {buttonText}
        </button>
        <span className="absolute right-2 top-1/2 flex -translate-y-1/2 flex-col">
          {isDefault ? (
            <>
              <span className="text-[7px]">&#x25B2;</span>
              <span className="text-[7px]">&#x25BC;</span>
            </>
          ) : (
            <button
              onClick={onRemoveSort}
              className="size-4 rounded-full text-[12px] font-bold transition-all hover:bg-slate-50"
            >
              &#x2715;
            </button>
          )}
        </span>
      </div>
      {showOption && (
        <div className="absolute z-10 mt-2 w-full space-y-1 rounded-md bg-white p-2 shadow shadow-slate-950/30">
          <Button
            disabled={sort === 'asc'}
            onClick={() => onSelectSort('asc')}
            className="w-full border-0 px-2 text-left text-sm"
          >
            Ascending
          </Button>
          <Button
            disabled={sort === 'desc'}
            onClick={() => onSelectSort('desc')}
            className="w-full border-0 px-2 text-left text-sm"
          >
            Descending
          </Button>
        </div>
      )}
    </div>
  )
}
