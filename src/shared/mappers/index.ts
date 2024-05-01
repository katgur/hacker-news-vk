export function mapTimeToDate(time: number): string {
  return new Date(time * 1000).toLocaleString("en");
}
