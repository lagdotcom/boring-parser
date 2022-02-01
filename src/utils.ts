export function split(input: string, sep = ","): string[] {
  return input.split(sep).map((x) => x.trim());
}

export function isString(input?: unknown): input is string {
  return typeof input === "string" && input.length > 0;
}

export function int(input: string): number {
  return parseInt(input, 10);
}
