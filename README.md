# Svelte Tetris

This is a very basic Tetris game made in the Svelte framework.

You can check it out [here](https://svelte-tetris.roeeyn.dev/).

![Demo Gif](https://media.giphy.com/media/PlrphASwpX5oiARVTA/giphy.gif)

## Get started

Install the dependencies...

```bash
git clone https://github.com/roeeyn/SvelteTetris.git
cd SvelteTetris
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see the app running. Press **start** and start playing around.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

## Deploying to the Web

I've automated this repo to build and deploy automatically to [Firebase](https://firebase.google.com/?hl=es) using GitHub Actions. For achieving that you need to create a project inside Firebase Console and getting Firebase Token by executing:

```bash
# optional deploy automation
firebase login:ci
```

## Justification for the project

I advanced to the second stage in the [MLH Fellowship](https://fellowship.mlh.io/) application, and I was asked to upload a significant project where I showed my skils. As most of my best projects are private I decided to create this game, and learn a new framework ([Svelte](https://svelte.dev/)) in the way.

I was inspired by [this](https://github.com/kubowania/Tetris) project which gave me a very good foundation of the game basics, but didn't have all the functionality I wanted. Also [ddanielcruzz](https://github.com/ddanielcruzz) helped me designing the [game console](https://twitter.com/danielcruzdev/status/1263219922450161668?s=12) and helped me by giving me a general review of my project.

I hope this demostrate that I'm ready for a bigger challenge 🔥.
