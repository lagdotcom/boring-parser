import Parser from "./Parser";
import { int, isString } from "./utils";

const pattern = /^(0|[1-9][0-9]*)$/;

export default class IntParser implements Parser<number> {
  check(input: string) {
    return isString(input) && pattern.test(input.trim());
  }

  apply(input: string) {
    return int(input.trim());
  }
}
