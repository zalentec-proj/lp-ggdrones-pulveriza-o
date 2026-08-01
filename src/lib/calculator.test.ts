import { describe, expect, it } from "vitest";
import { formatSprayingTime, parseBrazilianNumber } from "./calculator";

describe("calculadora de pulverização", () => {
  it.each([
    ["t10", "6h 35min"],
    ["t20p", "3h 20min"],
    ["t40", "1h 53min"],
  ] as const)("estima 40 ha para %s", (model, expected) => {
    expect(formatSprayingTime(40, model)).toBe(expected);
  });

  it("aceita vírgula brasileira e rejeita área inválida", () => {
    expect(parseBrazilianNumber("40,5")).toBe(40.5);
    expect(parseBrazilianNumber("0")).toBeNull();
    expect(parseBrazilianNumber("abc")).toBeNull();
  });
});
