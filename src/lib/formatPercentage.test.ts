import formatPercentage from './formatPercentage'

describe('formatPercentage', () => {
  describe('should return correctly', () => {
    const testcases: Array<[number, number]> = [
      [0, 0],
      [0.2, 20],
      [0.24344, 24.34],
      [100.23, 100]
    ]
    it.each(testcases)('when value %s to %s', (value, expected) => {
      const result = formatPercentage(value as never)
      expect(result).toEqual(expected)
    })
  })
})
