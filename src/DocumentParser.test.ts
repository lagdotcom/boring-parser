import DocumentParser from "./DocumentParser";
import NumberParser from "./NumberParser";
import StringParser from "./StringParser";
import TagParser from "./TagParser";

type Thingy = {
  name: string;
  level: number;
  lore?: string;
  tags: string[];
};
class TestParser extends DocumentParser<Thingy> {
  constructor() {
    super({
      name: new StringParser(),
      level: new NumberParser(),
      lore: new StringParser(),
      tags: new TagParser(),
    });
  }

  blank(): Thingy {
    return { name: "", level: 0, tags: [] };
  }
}

const testSource = `
name: Tim
level: 3
lore:Tim is nice, but dim.
tags:NICE, DIM

name:Chris
level:11
tags:  CRAFTY, COCKNEY
`;

describe("document parser", () => {
  const p = new TestParser();

  it("works on a good file", () => {
    const things = p.parse(testSource);
    expect(things.length).toBe(2);

    const [tim, chris] = things;
    expect(tim.name).toBe("Tim");
    expect(tim.lore).toBeDefined();
    expect(tim.level).toBe(3);
    expect(chris.tags).toStrictEqual(["CRAFTY", "COCKNEY"]);
  });
});
