export const productivityHaPerHour = {
  t10: 6.07028,
  t20p: 12,
  t40: 21.33,
} as const;

export type DroneModel = keyof typeof productivityHaPerHour;

export function parseBrazilianNumber(value: string): number | null {
  const trimmed = value.trim();
  const normalized = trimmed.includes(",")
    ? trimmed.replace(/\./g, "").replace(",", ".")
    : trimmed;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

export function estimateSprayingTime(areaHectares: number, model: DroneModel) {
  if (!Number.isFinite(areaHectares) || areaHectares <= 0) return null;
  const totalMinutes = Math.round((areaHectares / productivityHaPerHour[model]) * 60);
  return { totalMinutes, hours: Math.floor(totalMinutes / 60), minutes: totalMinutes % 60 };
}

export function formatSprayingTime(areaHectares: number, model: DroneModel): string | null {
  const result = estimateSprayingTime(areaHectares, model);
  if (!result) return null;
  return `${result.hours}h ${String(result.minutes).padStart(2, "0")}min`;
}
