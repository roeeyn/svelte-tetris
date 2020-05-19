<script>
  import { onDestroy } from "svelte";
  import {
    gridSquares,
    blockRotation,
    keyAction,
    currentBlockPosition,
  } from "./mainStore.js";
  import {
    GRID_WIDTH,
    GRID_SIZE,
    DOWN_KEY_CODE,
    UP_KEY_CODE,
    RIGHT_KEY_CODE,
    LEFT_KEY_CODE,
    tTetrimino,
  } from "./const.js";

  import {
    safelyIncRotation,
    isAtBottom,
    isAtRightEdge,
    isAtLeftEdge,
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

  const unsubSquares = gridSquares.subscribe(value => (squares = value));
  const unsubBlockRotation = blockRotation.subscribe(
    value => (actualBlockRotation = value)
  );
  const unsubPosition = currentBlockPosition.subscribe(
    value => (currentPosition = value)
  );
  const unsubMoveFn = keyAction.subscribe(value => (moveFn = value));

  const draw = ({ shape }) =>
    shape.forEach(index => (squares[index + currentPosition].color = "red"));

  const undraw = ({ shape }) => {
    if (!isAtBottom(shape)(currentPosition)(squares) || currentPosition >= 10)
      shape.forEach(index => (squares[index + currentPosition].color = "blue"));
  };

  const moveRight = ({ shape }) => {
    if (!isAtRightEdge(shape)(currentPosition)(squares)) currentPosition += 1;
  };

  const moveLeft = ({ shape }) => {
    if (!isAtLeftEdge(shape)(currentPosition)(squares)) currentPosition -= 1;
  };

  const moveDown = ({ shape }) => {
    if (isAtBottom(shape)(currentPosition)(squares)) freeze({ shape });
    else currentPosition += GRID_WIDTH;
  };

  const rotate = ({ shape, leftS2R, rightS2R }) => {
    // Making both calculations is not as heavy as it |
    // may sound because the size is fixed to 4
    if (isAtLeftEdge(shape)(currentPosition)(squares))
      currentPosition = currentPosition + leftS2R;
    else if (isAtRightEdge(shape)(currentPosition)(squares))
      currentPosition = currentPosition - rightS2R;

    blockRotation.rotate();
  };

  const freeze = ({ shape }) => {
    shape.forEach(index => {
      squares[index + currentPosition].isEmpty = false;
      squares[index + currentPosition].color = "green";
    });
    currentPosition = GRID_WIDTH / 2 - 1;
    draw(tTetrimino[actualBlockRotation]);
  };

  $: {
    undraw(tTetrimino[actualBlockRotation]);
    moveFn(tTetrimino[actualBlockRotation]);
    draw(tTetrimino[actualBlockRotation]);
  }

  onDestroy(
    () =>
      unsubSquares() || unsubBlockRotation() || unsubPosition() || unsubMoveFn()
  );
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
