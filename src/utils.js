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
  GRID_HEIGHT,
} from "./const";
import { gridSquares } from "./mainStore";

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
    // tTetrimino,
    // // lTetrimino,
    // reversedLTetrimino,
    // zTetrimino,
    // reversedZTetrimino,
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

export const destroyLines = gridSquares => {
  const [squaresWithSpaces, deletedRowsIndexes] = Array.from(
    { length: GRID_HEIGHT },
    (_, i) => i
  ) // Create an array for row indexes
    .map(rowIndex => [
      rowIndex,
      rowIndex * GRID_WIDTH,
      rowIndex * GRID_WIDTH + GRID_WIDTH - 1,
    ]) // get max and min index for each row
    .reduce(
      (
        [accGridSquares, deletedRowsIndex],
        [rowIndex, rowMinIndex, rowMaxIndex]
      ) => {
        const isRowFilled = accGridSquares
          .slice(rowMinIndex, rowMaxIndex + 1)
          .every(square => !square.isEmpty); // Check every square in the row
        return isRowFilled
          ? [
              accGridSquares.map((square, index) =>
                index >= rowMinIndex && index <= rowMaxIndex
                  ? { ...square, isEmpty: true, color: "blue" }
                  : square
              ),
              [...deletedRowsIndex, rowIndex],
            ] // iterate over every square and reset the filled ones
          : [[...accGridSquares], [...deletedRowsIndex]]; // just return a copy of the array if the row is not filled
      },
      [[...gridSquares], []] // Initializes with a copy of the original array
    );

  console.log(deletedRowsIndexes);
  return squaresWithSpaces;
};
