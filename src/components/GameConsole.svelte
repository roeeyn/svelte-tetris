<style>
  .console {
    width: 420px;
    height: 720px;
    margin: 36px 32px;
    background: linear-gradient(90deg, #efe7db 1%, #f7f3ed 100%);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }

  .gameButtonsContainer {
    background: gray;
    flex: 2;
    width: 100%;
  }

  .gameContainer {
    height: 80%;
    width: 100%;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .screenBorder {
    flex: 3;
    margin: 36px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, #949ab8 1%, #bac3d5 100%);
    border-radius: 10px;
  }
  .screen {
    height: calc(100% - 68px);
    width: 100%;
    margin: 34px 30px;
    background: linear-gradient(90deg, #b9d098 1%, #ccddaf 100%);
    border-radius: 10px;
  }
</style>

<div class="gameContainer">
  <div class="console">
    <div class="screenBorder">
      <div class="screen" />
    </div>
    <div class="gameButtonsContainer" />
  </div>
</div>
