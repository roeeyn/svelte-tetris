import { writable } from "svelte/store";
import { GRID_SIZE } from "../const.js";

export const gridSquares = writable(
  Array.from({ length: GRID_SIZE }, (_, i) => ({
    index: i,
    color: "blue",
  }))
);
