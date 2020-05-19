// Grid Sizes
export const GRID_WIDTH = 10;
export const GRID_HEIGHT = 20;
export const GRID_SIZE = GRID_HEIGHT * GRID_WIDTH;

// Key Codes
export const LEFT_KEY_CODE = 37;
export const UP_KEY_CODE = 38;
export const RIGHT_KEY_CODE = 39;
export const DOWN_KEY_CODE = 40;

// Tetriminos
export const tTetrimino = [
  [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2],
  [1, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
  [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
  [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
];
