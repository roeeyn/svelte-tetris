<script>
  import { onDestroy } from "svelte";
  import { gridSquares, blockRotation } from "./stores/mainStore.js";
  import { GRID_WIDTH, DOWN_KEY_CODE, tTetrimino } from "./const.js";

  let squares;
  let actualBlockRotation;

  const unsubSquares = gridSquares.subscribe((value) => (squares = value));
  const unsubBlockRotation = blockRotation.subscribe(
    (value) => (actualBlockRotation = value)
  );

  const draw = (tetrimino) => {
    const currentPosition = 4;
    tetrimino.forEach(
      (index) => (squares[index + currentPosition].color = "red")
    );
  };

  const undraw = (tetrimino) => {
    const currentPosition = 4;
    tetrimino.forEach((index) => {
      squares[index + currentPosition].color = "blue";
    });
  };

  function control(e) {
    if (e.keyCode === DOWN_KEY_CODE)
      undraw(tTetrimino[actualBlockRotation]) || blockRotation.rotate();
  }

  // function rotateBlock(){
  // 	undraw(tTetrimino)
  // 	blockRotation.rotate()
  // }

  //assign functions to keycodes

  // // the classical behavior is to speed up the block if down button is kept pressed so doing that
  // document.addEventListener("keydown", control);

  $: draw(tTetrimino[actualBlockRotation]);

  onDestroy(() => unsubSquares && unsubBlockRotation);
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
