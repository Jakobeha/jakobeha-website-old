import * as assert from "assert";

export function transpose<T>(old: T[][]): T[][] {
  const width = old.length;
  const height = (width === 0) ? 0 : old[0].length;
  for (let x = 0; x < width; x++) {
    assert(old[x].length === height);
  }
  const res: T[][] = new Array(height);
  for (let y = 0; y < height; y++) {
    res[y] = new Array(width);
    for (let x = 0; x < width; x++) {
      res[y][x] = old[x][y];
    }
  }
  return res;
}
