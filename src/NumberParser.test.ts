import NumberParser from "./NumberParser";

describe("NumberParser", () => {
  const p = new NumberParser();

  it("works on valid numbers", () => {
    expect(p.check("14")).toBeTruthy();
    expect(p.apply("14")).toBe(14);

    expect(p.check("  3.14 ")).toBeTruthy();
    expect(p.apply("  3.14 ")).toBeCloseTo(3.14);
  });

  it("complains about non-numbers", () => {
    expect(p.check("hi")).toBeFalsy();
    expect(p.check("1, 2, 3")).toBeFalsy();
  });
});
