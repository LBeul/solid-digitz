# Solid DigitZ Firmware

## Run dev locally

```shell
cd ./solid-digitz/
yarn # installs all dependencies
# wait for installation to be fininished
yarn dev # starts dev server on http://localhost:3000/
```

## Build project

```shell
yarn build
```

## Combine Resources into Single File to be served by an ESP32

1. run the above explained `build` command
2. compile your js module using `browserify myFile.js --outfile script.js` (make sure to subsitute `myFile` with the index.bla.js in your `/dist` folder
3. Substitute the `<script script type="module" crossorigin...` with a simple `<script>...</script>` and paste in your compiled js file
4. Copy the css code and also insert it as simple `<style>...</style>` element. Remove the other cross-orifin import, too.

## About SolidJS

Solid is kind of like React, but it has its quirks when introducing reactive state & signals. Be sure to read about the difference of `useState()` in React and `createSignal()` in Solid. Same goes for all other hooks.
