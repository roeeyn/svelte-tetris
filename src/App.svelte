<script>
  import { onDestroy } from "svelte";
  import { gridSquares } from "./stores/mainStore.js";
  import { GRID_WIDTH } from "./const.js";

  let squares;

  const unsubscribe = gridSquares.subscribe((value) => (squares = value));

  console.log(gridSquares);

  function draw(tetrimino) {
    const currentPosition = 4;
    tetrimino.forEach(
      (index) => (squares[index + currentPosition].color = "red")
    );
  }

  const tTetromino = [
    [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2],
    [1, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
    [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
    [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
  ];

  draw(tTetromino[0]);

  onDestroy(unsubscribe);
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

<main>
  <section>
    {#each squares as { index, color }, i}
      <div style="background: {color}" />
    {/each}
  </section>
</main>
