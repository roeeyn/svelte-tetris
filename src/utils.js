import {
  GRID_SIZE,
  GRID_WIDTH,
  tTetrimino,
  lTetrimino,
  reversedLTetrimino,
  zTetrimino,
  iTetrimino,
  reversedZTetrimino,
  oTetrimino,
} from "./const";

export const safelyIncRotation = number => (number === 3 ? 0 : number + 1);

export const isAtBottom = tetriminoShape => currentPosition => gridSquares =>
  tetriminoShape.some(
    index =>
      currentPosition + index + GRID_WIDTH >= GRID_SIZE ||
      !gridSquares[currentPosition + index + GRID_WIDTH].isEmpty
  );

export const isAtRightEdge = tetriminoShape => currentPosition =>
  tetriminoShape.some(
    index => (currentPosition + index) % GRID_WIDTH === GRID_WIDTH - 1
  );

export const isEmptyAtRight = tetriminoShape => currentPosition => gridSquares =>
  tetriminoShape.every(
    index => gridSquares[currentPosition + index + 1].isEmpty
  );

export const isAtLeftEdge = tetriminoShape => currentPosition =>
  tetriminoShape.some(index => (currentPosition + index) % GRID_WIDTH === 0);

export const isEmptyAtLeft = tetriminoShape => currentPosition => gridSquares =>
  tetriminoShape.every(
    index => gridSquares[currentPosition + index - 1].isEmpty
  );

export const getRandomTetrimino = () => {
  const tetriminos = [
    tTetrimino,
    lTetrimino,
    reversedLTetrimino,
    zTetrimino,
    reversedZTetrimino,
    oTetrimino,
    iTetrimino,
  ];
  return tetriminos[Math.floor(Math.random() * tetriminos.length)];
};

export const isNextRotationValid = tetrimino => gridSquares => actualBlockRotation => currentPosition =>
  tetrimino[
    safelyIncRotation(actualBlockRotation) // see next position
  ].shape.every(
    index =>
      currentPosition + index <= GRID_SIZE &&
      gridSquares[currentPosition + index].isEmpty
  );
