import { writable } from "svelte/store";
import { GRID_SIZE, GRID_WIDTH } from "./const.js";
import { safelyIncRotation } from "./utils.js";

const createBlockRotation = () => {
  const { subscribe, update } = writable(0);

  return {
    subscribe,
    // When we get to the third rotation, we must reset
    // rotation index as we only have 4 rotations for blocks
    rotate: () => update(n => safelyIncRotation(n)),
  };
};

export const blockRotation = createBlockRotation();

// GRID_WIDTH / 2 - 1 will be the middle of the screen
export const currentBlockPosition = writable(GRID_WIDTH / 2 - 1);

// Action that will be executed depending on keycode
export const keyAction = writable(() => {});

export const gridSquares = writable(
  Array.from({ length: GRID_SIZE }, (_, i) => ({
    index: i,
    color: "blue",
    isEmpty: true,
  }))
);
