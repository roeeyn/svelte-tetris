import { writable } from "svelte/store";
import { GRID_SIZE } from "../const.js";

const createBlockRotation = () => {
  const { subscribe, update } = writable(0);

  return {
    subscribe,
    rotate: () => update(n => (n === 3 ? 0 : n + 1)),
  };
};

export const blockRotation = createBlockRotation();

export const gridSquares = writable(
  Array.from({ length: GRID_SIZE }, (_, i) => ({
    index: i,
    color: "blue",
  }))
);
