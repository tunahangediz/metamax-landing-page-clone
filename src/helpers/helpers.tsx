export function truncateString(str: string) {
  return str.length > 50 ? str.substring(0, 50) + "..." : str;
}
