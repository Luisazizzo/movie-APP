export const invertDate = (data: string) =>
  new Date(data).toLocaleString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

export const invertMinutes = (totMinutes?: number) => {
  if (totMinutes) {
    return `${Math.floor(totMinutes / 60)}:${totMinutes % 60}`;
  }
  return "In arrivo";
};

export const formatValue = (value: number) =>
  new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  }).format(value);
