export function formatNumber(n: number): string {
  return n.toLocaleString('en-US');
}

export function truncateAddress(address: string, chars = 4) {
  if (!address) return '';
  return address.slice(0, chars + 2) + '...' + address.slice(-chars);
}
