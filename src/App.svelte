<script>
  import Game from "./components/Game.svelte";
  import GameConsole from "./components/GameConsole.svelte";
  import Instructions from "./components/Instructions.svelte";
</script>

<style>
  .main {
    background: rgb(61, 147, 183);
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
</style>

<main class="main">
  <GameConsole />
  <Instructions />
</main>
