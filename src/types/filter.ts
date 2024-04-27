export type SortType = 'asc' | 'desc' | 'default'

export type UseFilterType = {
  sort: SortType
  setSort: (sort: SortType) => void
}
