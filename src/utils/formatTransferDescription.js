export default function formatTransferDescription(transfers) {
  if (transfers.length === 3) return `3 пересадки`;
  if (transfers.length === 2) return `2 пересадки`;
  if (transfers.length === 3) return `1 пересадка`;

  return `прямой рейс`;
}
