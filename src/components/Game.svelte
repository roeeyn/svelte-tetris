<script>
  import { onDestroy } from "svelte";
  import {
    gridSquares,
    blockRotation,
    keyAction,
    currentBlockPosition,
    tetrimino,
    currentlyPlaying,
    destroyedLines,
  } from "../mainStore.js";
  import {
    GRID_WIDTH,
    GRID_SIZE,
    DOWN_KEY_CODE,
    UP_KEY_CODE,
    RIGHT_KEY_CODE,
    LEFT_KEY_CODE,
  } from "../const.js";

  import {
    safelyIncRotation,
    isAtBottom,
    isAtRightEdge,
    isAtLeftEdge,
    isEmptyAtRight,
    isEmptyAtLeft,
    isNextRotationValid,
    getRandomTetrimino,
    destroyLines,
  } from "../utils/utils.js";

  function control(e) {
    if (e.keyCode === UP_KEY_CODE && isPlaying) moveFn = rotate;
    else if (e.keyCode === RIGHT_KEY_CODE && isPlaying) moveFn = moveRight;
    else if (e.keyCode === LEFT_KEY_CODE && isPlaying) moveFn = moveLeft;
    else if (e.keyCode === DOWN_KEY_CODE && isPlaying) moveFn = moveDown;
  }

  let squares;
  let actualBlockRotation;
  let currentPosition;
  let moveFn;
  let actualTetrimino;
  let actualDestroyedLines;
  let intervalTime = 750;
  let isPlaying;

  const unsubFns = [
    tetrimino.subscribe(value => (actualTetrimino = value)),
    gridSquares.subscribe(value => (squares = value)),
    blockRotation.subscribe(value => (actualBlockRotation = value)),
    currentBlockPosition.subscribe(value => (currentPosition = value)),
    keyAction.subscribe(value => (moveFn = value)),
    destroyedLines.subscribe(value => (actualDestroyedLines = value)),
    currentlyPlaying.subscribe(value => (isPlaying = value)),
  ];

  const draw = ({ shape }) =>
    shape.forEach(index => (squares[index + currentPosition].color = "red"));

  const undraw = ({ shape }) =>
    shape.forEach(index => (squares[index + currentPosition].color = "blue"));

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

  const gameOver = () => {
    isPlaying = false;
    alert("perdiste ogt");
  };

  const freeze = ({ shape }) => {
    shape.forEach(index => {
      squares[index + currentPosition].isEmpty = false;
      squares[index + currentPosition].color = "green";
    });

    // Destroy any available complete lines /
    // and update score
    const [newSquares, newDestroyedLines] = destroyLines(squares);
    squares = newSquares;
    actualDestroyedLines = actualDestroyedLines + newDestroyedLines;

    // Create another tetrimino and restart position
    currentPosition = GRID_WIDTH / 2 - 1;
    actualTetrimino = getRandomTetrimino();

    const canDrawNewTetrimino = actualTetrimino[
      actualBlockRotation
    ].shape.every(index => squares[index + currentPosition].isEmpty);

    if (canDrawNewTetrimino) draw(actualTetrimino[actualBlockRotation]);
    else gameOver();
  };

  $: {
    undraw(actualTetrimino[actualBlockRotation]);
    moveFn(actualTetrimino[actualBlockRotation]);
    draw(actualTetrimino[actualBlockRotation]);
  }

  // const downInterval = setInterval(() => (moveFn = moveDown), intervalTime);
  $: console.log(isPlaying);
  onDestroy(() => unsubFns.forEach(unsubFn => unsubFn()));
</script>

<style>
  main {
    margin: 0 auto;
  }
  section {
    display: grid;
    grid-template-rows: repeat(20, 14px);
    grid-template-columns: repeat(10, 14px);
    gap: 1px;
  }
</style>

<svelte:window on:keydown={control} />

<main>
  <section>
    {#each squares as { color }, i}
      <div style="background: {color}" />
    {/each}
  </section>
  <!-- <h3 on:click={() => (isPlaying = true)}>
    Lines Destroyed: {actualDestroyedLines}
  </h3> -->
</main>
