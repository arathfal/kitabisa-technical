'use client'

import { MouseEventHandler, useCallback, useMemo, useState } from 'react'

import { SortType } from '@/types/filter'

import Button from '../Button'

export default function Sorting() {
  const [sort, setSort] = useState<SortType>('default')
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
    <div className="relative w-56 sm:w-64">
      <Button
        onClick={() => setShowOption(true)}
        className="flex w-full items-center justify-between gap-2"
      >
        <span className="text-sm sm:text-base">{buttonText}</span>
        <span className="flex flex-col">
          {isDefault ? (
            <>
              <span className="text-[7px]">&#x25B2;</span>
              <span className="text-[7px]">&#x25BC;</span>
            </>
          ) : (
            <button onClick={onRemoveSort} className="text-sm font-bold">
              &#x2715;
            </button>
          )}
        </span>
      </Button>
      {showOption && (
        <div className="absolute z-10 mt-2 w-full space-y-1 rounded-md p-2 shadow shadow-slate-950/30">
          <Button
            disabled={sort === 'asc'}
            onClick={() => onSelectSort('asc')}
            className="w-full border-0 px-2 text-left"
          >
            Ascending
          </Button>
          <Button
            disabled={sort === 'desc'}
            onClick={() => onSelectSort('desc')}
            className="w-full border-0 px-2 text-left"
          >
            Descending
          </Button>
        </div>
      )}
    </div>
  )
}
