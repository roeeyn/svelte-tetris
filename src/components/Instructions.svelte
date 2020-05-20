<script>
  import Game from "./Game.svelte";
</script>

<style>
  .instructionsContainer {
    height: 80%;
    max-width: 30vmax;
    margin: 0 5vmax;
  }
  .instructionKey {
    font-weight: bold;
    color: hsl(198, 52%, 12%);
  }
  h1 {
    font-size: calc(3vmax + 12px);
    font-family: "Press Start 2P", cursive;
    color: hsl(198, 86%, 12%);
  }
  p {
    font-size: calc(1vmax + 12px);
  }
</style>

<div class="instructionsContainer">
  <h1>Tetris</h1>
  <p>
    This is a very basic tetris game. You can use
    <span class="instructionKey">arrow keys</span>
    to move and rotate blocks. Game ends when a new piece don't fit in the
    screen. Enjoy!
  </p>
  <p>
    Press
    <span class="instructionKey">Enter Key</span>
    to start playing.
  </p>
</div>
