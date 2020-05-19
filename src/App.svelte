<script>
  import { onDestroy } from "svelte";
  import {
    gridSquares,
    blockRotation,
    currentBlockPosition,
  } from "./stores/mainStore.js";
  import {
    GRID_WIDTH,
    DOWN_KEY_CODE,
    RIGHT_KEY_CODE,
    tTetrimino,
  } from "./const.js";

  function control(e) {
    if (e.keyCode === DOWN_KEY_CODE)
      undraw(tTetrimino[actualBlockRotation]) || blockRotation.rotate();
    else if (e.keyCode === RIGHT_KEY_CODE)
      undraw(tTetrimino[actualBlockRotation]) ||
        moveRight(tTetrimino[actualBlockRotation]);
  }

  let squares;
  let actualBlockRotation;
  let currentPosition;

  const unsubSquares = gridSquares.subscribe((value) => (squares = value));
  const unsubBlockRotation = blockRotation.subscribe(
    (value) => (actualBlockRotation = value)
  );
  const unsubPosition = currentBlockPosition.subscribe(
    (value) => (currentPosition = value)
  );

  const draw = (tetrimino) => {
    tetrimino.forEach(
      (index) => (squares[index + currentPosition].color = "red")
    );
  };

  const undraw = (tetrimino) => {
    tetrimino.forEach((index) => {
      squares[index + currentPosition].color = "blue";
    });
  };

  const moveRight = (tetrimino) => {
    const isAtRightEdge = tetrimino.some(
      (index) => (currentPosition + index) % GRID_WIDTH === GRID_WIDTH - 1
    );

    console.log("hey", isAtRightEdge);
    if (!isAtRightEdge) currentPosition += 1;
    // if (tetrimino.some(index => squares[cPosition + index].classList.contains('block2'))) {
    //   currentPosition -= 1
    // } validacion de que no hay otro bloque
    draw(tetrimino);
  };

  $: draw(tTetrimino[actualBlockRotation]);

  onDestroy(() => unsubSquares() || unsubBlockRotation() || unsubPosition());
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
