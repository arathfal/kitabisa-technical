import { create } from 'zustand'

import { UseFilterType } from '@/types/filter'

const useFilter = create<UseFilterType>((set) => ({
  sort: 'asc',
  setSort: (sort) => set({ sort })
}))

export default useFilter
