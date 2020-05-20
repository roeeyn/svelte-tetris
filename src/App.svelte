<script>
  import Game from "./components/Game.svelte";
  import GameConsole from "./components/GameConsole.svelte";
  import Instructions from "./components/Instructions.svelte";
</script>

<style>
  .main {
    background: rgb(61, 147, 183);
    height: 100vh;
    display: flex;
    align-items: center;
    margin: 0;
  }
</style>

<main class="main">
  <GameConsole />
  <Instructions />
</main>
