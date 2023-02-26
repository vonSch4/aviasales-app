export default function formatPrice(price) {
  const thousand = Math.trunc(price / 1000);
  const hundreds = price % 1000 >= 100 ? price % 1000 : `0${price % 1000}`;

  return `${thousand} ${hundreds} Р`;
}
