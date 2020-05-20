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
//   S2R - Space to rotate, is how much space it needs in order to rotate \
//   when it is in each border
export const tTetrimino = [
  {
    shape: [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2],
    rightS2R: 0,
    leftS2R: 0,
  },
  {
    shape: [1, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
    rightS2R: 0,
    leftS2R: 1,
  },
  {
    shape: [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
    rightS2R: 0,
    leftS2R: 0,
  },
  {
    shape: [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
    rightS2R: 1,
    leftS2R: 0,
  },
];

export const lTetromino = [
  {
    shape: [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, 2],
    rightS2R: 0,
    leftS2R: 1,
  },
  {
    shape: [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 2],
    rightS2R: 0,
    leftS2R: 0,
  },
  {
    shape: [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2],
    rightS2R: 1,
    leftS2R: 0,
  },
  {
    shape: [GRID_WIDTH, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2 + 2],
    rightS2R: 0,
    leftS2R: 0,
  },
];

export const reversedLTetromino = [
  {
    shape: [1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 2, 2],
    rightS2R: 1,
    leftS2R: 0,
  },
  {
    shape: [
      GRID_WIDTH * 2 + 1,
      GRID_WIDTH * 2 + 2,
      GRID_WIDTH + 3,
      GRID_WIDTH * 2 + 3,
    ],
    rightS2R: 0,
    leftS2R: 0,
  },
  {
    shape: [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2 + 2],
    rightS2R: 0,
    leftS2R: 0,
  },
  {
    shape: [GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH + 2, GRID_WIDTH + 3],
    rightS2R: 0,
    leftS2R: 0,
  },
];

export const zTetromino = [
  {
    shape: [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
    leftS2R: 0,
    rightS2R: 1,
  },
  {
    shape: [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1],
    leftS2R: 0,
    rightS2R: 0,
  },
  {
    shape: [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
    leftS2R: 0,
    rightS2R: 1,
  },
  {
    shape: [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1],
    leftS2R: 0,
    rightS2R: 0,
  },
];
