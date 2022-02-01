import IntParser from "./IntParser";

describe("IntParser", () => {
  const p = new IntParser();

  it("works on valid integers", () => {
    expect(p.check("14")).toBeTruthy();
    expect(p.apply("14")).toBe(14);

    expect(p.check("  0 ")).toBeTruthy();
    expect(p.apply("  0 ")).toBe(0);
  });

  it("complains about non-integers", () => {
    expect(p.check("hi")).toBeFalsy();
    expect(p.check("1, 2, 3")).toBeFalsy();
    expect(p.check("  3.14")).toBeFalsy();
  });
});
