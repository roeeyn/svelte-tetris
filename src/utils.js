import { GRID_SIZE, GRID_WIDTH } from "./const";

export const safelyIncRotation = number => (number === 3 ? 0 : number + 1);

export const isAtBottom = (tetriminoShape, currentPosition) =>
  tetriminoShape.some(
    index => currentPosition + index + GRID_WIDTH > GRID_SIZE
  );

export const isAtRightEdge = (tetriminoShape, currentPosition) =>
  tetriminoShape.some(
    index => (currentPosition + index) % GRID_WIDTH === GRID_WIDTH - 1
  );

export const isAtLeftEdge = (tetriminoShape, currentPosition) =>
  tetriminoShape.some(index => (currentPosition + index) % GRID_WIDTH === 0);
