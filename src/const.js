// Grid Sizes
export const GRID_WIDTH = 10;
export const GRID_HEIGHT = 20;
export const GRID_SIZE = GRID_HEIGHT * GRID_WIDTH;

// Key Codes
export const LEFT_KEY_CODE = 37;
export const UP_KEY_CODE = 38;
export const RIGHT_KEY_CODE = 39;
export const DOWN_KEY_CODE = 40;
export const ENTER_KEY_CODE = 13;

export const REPEAT_INTERVAL = 300;

// Colors
export const EMPTY_SQUARE_COLOR = "hsl(85, 37%, 44%, 50%)";
export const ACTUAL_SQUARE_COLOR = "hsl(85, 37%, 22%, 66%)";
export const OCCUPIED_SQUARE_COLOR = "hsl(85, 37%, 11%, 77%)";

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

export const lTetrimino = [
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

export const reversedLTetrimino = [
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

export const zTetrimino = [
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

export const reversedZTetrimino = [
  {
    shape: [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2],
    leftS2R: 0,
    rightS2R: 1,
  },
  {
    shape: [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2 + 2],
    leftS2R: 0,
    rightS2R: 0,
  },
  {
    shape: [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2],
    leftS2R: 0,
    rightS2R: 1,
  },
  {
    shape: [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2 + 2],
    leftS2R: 0,
    rightS2R: 0,
  },
];

export const oTetrimino = [
  { shape: [0, 1, GRID_WIDTH, GRID_WIDTH + 1], rightS2R: 0, leftS2R: 0 },
  { shape: [0, 1, GRID_WIDTH, GRID_WIDTH + 1], rightS2R: 0, leftS2R: 0 },
  { shape: [0, 1, GRID_WIDTH, GRID_WIDTH + 1], rightS2R: 0, leftS2R: 0 },
  { shape: [0, 1, GRID_WIDTH, GRID_WIDTH + 1], rightS2R: 0, leftS2R: 0 },
];

export const iTetrimino = [
  {
    shape: [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
    leftS2R: 1,
    rightS2R: 2,
  },
  {
    shape: [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3],
    leftS2R: 0,
    rightS2R: 0,
  },
  {
    shape: [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
    leftS2R: 1,
    rightS2R: 2,
  },
  {
    shape: [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3],
    leftS2R: 0,
    rightS2R: 0,
  },
];
