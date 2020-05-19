import { GRID_SIZE, GRID_WIDTH } from "./const";

export const safelyIncRotation = number => (number === 3 ? 0 : number + 1);

export const isAtBottom = tetriminoShape => currentPosition => gridSquares =>
  tetriminoShape.some(
    index =>
      currentPosition + index + GRID_WIDTH > GRID_SIZE ||
      !gridSquares[currentPosition + index + GRID_WIDTH].isEmpty
  );

export const isAtRightEdge = tetriminoShape => currentPosition => gridSquares =>
  tetriminoShape.some(
    index =>
      (currentPosition + index) % GRID_WIDTH === GRID_WIDTH - 1 ||
      gridSquares[currentPosition + index + 1].color != "blue"
  );

export const isAtLeftEdge = tetriminoShape => currentPosition => gridSquares =>
  tetriminoShape.some(
    index =>
      (currentPosition + index) % GRID_WIDTH === 0 ||
      gridSquares[currentPosition + index - 1].color != "blue"
  );
