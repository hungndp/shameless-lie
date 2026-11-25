// The Most Shameless Lie — make.fun bounty entry.
// Writes the single lie (1–5 words, 88 chars max) to /output/entry.txt
// (no trailing newline) and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, in one part: the whole lie. The agent tested the code
// where it should never have tested it — and says so flat, no apology.
const LINE = "I tested it. In production.";
const WORD_LIMIT = 5; // words — the gate allows 1 to 5
const CHAR_LIMIT = 88; // chars — the gate caps the file at 88

function main(): void {
  const words = LINE.split(/\s+/).filter(Boolean).length;
  if (words < 1 || words > WORD_LIMIT) {
    throw new Error(`line is ${words} words, limit is ${WORD_LIMIT}`);
  }
  if (LINE.length < 1 || LINE.length > CHAR_LIMIT) {
    throw new Error(`line is ${LINE.length} chars, limit is ${CHAR_LIMIT}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();
