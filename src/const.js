// Grid Sizes
export const GRID_WIDTH = 10;
export const GRID_HEIGHT = 20;
export const GRID_SIZE = GRID_HEIGHT * GRID_WIDTH;

// Key Codes
export const DOWN_KEY_CODE = 38;

// Tetriminos
export const tTetrimino = [
  [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2],
  [1, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
  [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
  [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
];
