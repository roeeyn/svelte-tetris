<script>
  import Game from "./Game.svelte";
  import { destroyedLines, hasGameEnded } from "../mainStore.js";
  import {
    DOWN_KEY_CODE,
    UP_KEY_CODE,
    RIGHT_KEY_CODE,
    LEFT_KEY_CODE,
    ENTER_KEY_CODE,
    REPEAT_INTERVAL,
  } from "../const.js";

  let game;
  let repeatInterval;


  // Pass the control event down to the game
  function control(event) {
    if (game.control(event)) {
      // The event was handled by the game
      event.preventDefault();
    }
  }

  function pointerDown({ keyCode }) {
    return () => {
      // Handle the click immediately
      buttonClick({ keyCode })();
      // And start repeating it on interval
      repeatInterval = setInterval(
        buttonClick({ keyCode }),
        REPEAT_INTERVAL,
      );
    }
  }

  function pointerUp() {
    clearInterval(repeatInterval);
  }

  function buttonClick({ keyCode }) {
    return () => {
      game.control({ keyCode });
    }
  }

</script>

<style>
  .case {
    margin: 5vmax;
    min-width: 425px;
    min-height: 715px;
    width: min(425px, 50vmin);
    height: min(715px, 85vmin);
    background: linear-gradient(
      89.26deg,
      hsl(36, 38%, 90%) 1.12%,
      hsl(36, 38%, 95%) 99%
    );
    border-radius: 1vmin;
    clip-path: polygon(0 95%, 7% 100%, 90% 100%, 100% 91%, 100% 0, 0 0);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60% 2fr 1fr;
    justify-items: center;
    align-items: center;
  }

  .outer-screen {
    width: 85%;
    height: 90%;
    background: linear-gradient(
      89.05deg,
      hsl(230, 20%, 65%) 1.12%,
      hsl(220, 24%, 78%) 99.25%
    );
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inner-screen {
    height: 85%;
    width: 85%;
    background: linear-gradient(
      88.95deg,
      hsl(85, 37%, 71%) 0.68%,
      hsl(82, 40%, 78%) 98.63%
    );
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .controls {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }

  .direction-pad {
    width: min(80px, 10vmin);
    min-width: 80px;
    min-height: 80px;
    height: min(80px, 10vmin);
    background: linear-gradient(90deg, hsl(0, 0%, 0%) 0%, hsl(0, 0%, 32%) 100%);
    clip-path: polygon(
      0 35%,
      35% 35%,
      35% 0,
      65% 0%,
      65% 35%,
      100% 35%,
      100% 65%,
      65% 65%,
      65% 100%,
      35% 100%,
      35% 65%,
      0 65%
    );
  }
  .left-controls {
    position: relative;
  }
  .pad-arrow {
    position: absolute;
    border: 0;
    padding: 0;
    background: transparent;
  }
  .pad-arrow:active {
    background: red;
  }
  .pad-arrow-top {
    width: 30%;
    height: 35%;
    left: 35%;
    top: 0;
  }
  .pad-arrow-left {
    width: 35%;
    height: 30%;
    left: 0;
    top: 35%;
  }
  .pad-arrow-right {
    width: 35%;
    height: 30%;
    left: 65%;
    top: 35%;
  }
  .pad-arrow-bottom {
    width: 30%;
    height: 35%;
    left: 35%;
    top: 65%;
  }
  .right-controls {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }

  .button {
    min-width: 40px;
    min-height: 40px;
    width: min(40px, 5vmin);
    height: min(40px, 5vmin);
    border-radius: 50%;
    background: linear-gradient(
      90deg,
      hsl(346, 68%, 64%) 0%,
      hsl(347, 67%, 71%) 100%
    );
  }

  .button-start {
    transform: translate(-50%, 800%) rotate(-25deg);
    border: 0;
    height: 12px;
    width: 60px;
    background: #999;
    border-radius: 10px;
    box-shadow: 57px 27px #999;
  }

  .controls button:active {
    background: linear-gradient(
      90deg,
      hsl(346, 68%, 64%) 0%,
      hsl(347, 67%, 71%) 100%
    );
  }

  .right {
    grid-column: 2;
  }

  .gameOver {
    padding-top: 48px;
    font-weight: bold;
  }

  .score {
    padding: 14px 12px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .score > p {
    margin: 0;
    color: hsl(85, 37%, 30%);
  }

  .speakers-group {
    width: max-content;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1vmin;
  }

  .speaker {
    border-radius: 100%;
    min-width: 3px;
    min-height: 3px;
    width: max(3px, 0.5vmin);
    height: max(3px, 0.5vmin);
    background: #1b1b1b;
  }
</style>

<svelte:window on:keydown={control} />

<div class="case">
  <div class="outer-screen">
    <div class="inner-screen">
      <Game bind:this={game} />
      <div class="score">
        <p>Lines:</p>
        <p>{$destroyedLines}</p>
        {#if $hasGameEnded}
          <p class="gameOver">Game Over!</p>
        {/if}
      </div>
    </div>
  </div>
  <div class="controls">
    <div
      class="left-controls"
      on:pointerup={pointerUp}
      on:mouseleave={pointerUp}
      >
      <div class="direction-pad" />
      <button
        class="pad-arrow pad-arrow-top"
        on:pointerdown={pointerDown({ keyCode: UP_KEY_CODE })}
        />
      <button
        class="pad-arrow pad-arrow-left"
        on:pointerdown={pointerDown({ keyCode: LEFT_KEY_CODE })}
        />
      <button
        class="pad-arrow pad-arrow-right"
        on:pointerdown={pointerDown({ keyCode: RIGHT_KEY_CODE })}
        />
      <button
        class="pad-arrow pad-arrow-bottom"
        on:pointerdown={pointerDown({ keyCode: DOWN_KEY_CODE })}
        />
    </div>
    <button
      class="button-start"
      on:click={buttonClick({ keyCode: ENTER_KEY_CODE })}
      />
    <div class="right-controls">
      <div class="button right" />
      <div class="button left" />
    </div>
  </div>
  <div class="speakers">
    <div class="speakers-group">
      <div class="speaker" />
      <div class="speaker" />
      <div class="speaker" />
      <div class="speaker" />
      <div class="speaker" />
      <div class="speaker" />
      <div class="speaker" />
      <div class="speaker" />
      <div class="speaker" />
      <div class="speaker" />
      <div class="speaker" />
      <div class="speaker" />
      <div class="speaker" />
      <div class="speaker" />
      <div class="speaker" />
    </div>
  </div>
</div>
