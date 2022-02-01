import Parser from "./Parser";
import { isString } from "./utils";

const pattern = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/;

export default class NumberParser implements Parser<number> {
  check(input: string) {
    return isString(input) && pattern.test(input.trim());
  }

  apply(input: string) {
    return parseFloat(input.trim());
  }
}
