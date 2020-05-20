<script>
  import { onDestroy } from "svelte";
  import {
    gridSquares,
    blockRotation,
    keyAction,
    currentBlockPosition,
    tetrimino,
  } from "./mainStore.js";
  import {
    GRID_WIDTH,
    GRID_SIZE,
    DOWN_KEY_CODE,
    UP_KEY_CODE,
    RIGHT_KEY_CODE,
    LEFT_KEY_CODE,
  } from "./const.js";

  import {
    safelyIncRotation,
    isAtBottom,
    isAtRightEdge,
    isAtLeftEdge,
    isEmptyAtRight,
    isEmptyAtLeft,
    isNextRotationValid,
    getRandomTetrimino,
  } from "./utils.js";

  function control(e) {
    if (e.keyCode === UP_KEY_CODE) moveFn = rotate;
    else if (e.keyCode === RIGHT_KEY_CODE) moveFn = moveRight;
    else if (e.keyCode === LEFT_KEY_CODE) moveFn = moveLeft;
    else if (e.keyCode === DOWN_KEY_CODE) moveFn = moveDown;
  }

  let squares;
  let actualBlockRotation;
  let currentPosition;
  let moveFn;
  let actualTetrimino;
  let intervalTime = 750;

  const unsubFns = [
    tetrimino.subscribe(value => (actualTetrimino = value)),
    gridSquares.subscribe(value => (squares = value)),
    blockRotation.subscribe(value => (actualBlockRotation = value)),
    currentBlockPosition.subscribe(value => (currentPosition = value)),
    keyAction.subscribe(value => (moveFn = value)),
  ];

  const draw = ({ shape }) =>
    shape.forEach(index => (squares[index + currentPosition].color = "red"));

  const undraw = ({ shape }) => {
    if (!isAtBottom(shape)(currentPosition)(squares) || currentPosition >= 10)
      shape.forEach(index => (squares[index + currentPosition].color = "blue"));
  };

  const moveRight = ({ shape }) => {
    if (
      !isAtRightEdge(shape)(currentPosition) &&
      isEmptyAtRight(shape)(currentPosition)(squares)
    )
      currentPosition += 1;
  };

  const moveLeft = ({ shape }) => {
    if (
      !isAtLeftEdge(shape)(currentPosition) &&
      isEmptyAtLeft(shape)(currentPosition)(squares)
    )
      currentPosition -= 1;
  };

  const moveDown = ({ shape }) => {
    if (isAtBottom(shape)(currentPosition)(squares)) freeze({ shape });
    else currentPosition += GRID_WIDTH;
  };

  const rotate = ({ shape, leftS2R, rightS2R }) => {
    // Partial function application as the first values \
    // won't change in this method execution
    const isValid = isNextRotationValid(actualTetrimino)(squares)(
      actualBlockRotation
    );

    if (isValid(currentPosition)) {
      if (isAtLeftEdge(shape)(currentPosition)) {
        currentPosition = currentPosition + leftS2R;

        if (isValid(currentPosition)) blockRotation.rotate();
        else currentPosition = currentPosition - leftS2R;

        return;
      } else if (isAtRightEdge(shape)(currentPosition)) {
        currentPosition = currentPosition - rightS2R;

        if (isValid(currentPosition)) blockRotation.rotate();
        else currentPosition = currentPosition + rightS2R;

        return;
      }

      blockRotation.rotate();
    }
  };

  const freeze = ({ shape }) => {
    shape.forEach(index => {
      squares[index + currentPosition].isEmpty = false;
      squares[index + currentPosition].color = "green";
    });
    currentPosition = GRID_WIDTH / 2 - 1;
    actualTetrimino = getRandomTetrimino();
    draw(actualTetrimino[actualBlockRotation]);
  };

  $: {
    undraw(actualTetrimino[actualBlockRotation]);
    moveFn(actualTetrimino[actualBlockRotation]);
    draw(actualTetrimino[actualBlockRotation]);
  }

  // const downInterval = setInterval(() => (moveFn = moveDown), intervalTime);

  onDestroy(() => unsubFns.forEach(unsubFn => unsubFn()));
</script>

<style>
  main {
    /* background: red; */
  }

  .block {
    background: red;
  }

  section {
    display: grid;
    grid-template-rows: repeat(20, 10px);
    grid-template-columns: repeat(10, 10px);
    gap: 1px;
  }

  div {
    /* background: blue; */
  }
</style>

<svelte:window on:keydown={control} />

<main>
  <section>
    {#each squares as { index, color }, i}
      <div style="background: {color}" />
    {/each}
  </section>
</main>
