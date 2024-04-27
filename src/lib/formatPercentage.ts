export default function formatPercentage(value: number): number {
  let percentage = value * 100
  if (percentage > 100) {
    percentage = 100
  }
  return Number(percentage.toFixed(2))
}
