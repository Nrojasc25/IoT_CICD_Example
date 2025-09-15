import { describe, it, expect } from "vitest";
import { isOn } from "../toggleFan";

describe("isOn", () => {
  it("returns true if fan switch is on", () => {
    expect(isOn(true)).toBe(true);
  });

  it("returns false if fan switch is off", () => {
    expect(isOn(false)).toBe(false);
  });
});
