# DigitZ GUI

This is a graphical interface for the **[DigitZ](https://deutsche-schreberjugend.de/digitz-smartes-gaertnern/)**, a sensor-equipped microcontroller to gather & process gardening data.

The **DigitZ** is an ESP32 board sporting an Intel M5 Atom CPU. It's very limited in storage and memory, which makes using modern frontend libraries very difficult. The total front end build must be smaller than 100kB.

To display hardware and sensor data, the built-in C++ webserver substitutes reserved keyword strings in the HTML GUI with the actual real-time data gathered from the sensors. This requires the GUI to be bundled up as a single HTML file. Importing external modules, like CSS or JS files, would stress both the memory load as well as the work to be done by the string replacing algorithm.

Our initial idea of using ReactJS was destroyed for two reasons:

1. React is way to big. No chance we're getting a full-blown frontend under 100kb this way.
2. React obfuscates classNames and HTML-element id's and names. This renders the string replacement process useless.

To solve this issues, we came up with the following stack:

## The Tech Stack

- **SolidJS** as a super small build-size alternative for ReactJS
- **TailwindCSS** for styling with utility classes & purging unused CSS

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

1. Run the above explained `build` command
2. Access the generated `/dist` directory
3. Inspect `/dist/index.html`
4. Substitute the `<script script type="module" crossorigin...` with a simple `<script>...</script>` at the end of the body and paste in the content of `/dist/assets/index.<...>.js`
5. Copy the css code from `/dist/assets/index.<...>.css` and also insert it as simple `<style>...</style>` element. Remove the other cross-orifin import, too.

> Current combined File Size: `51KB`

## About SolidJS

Solid is kind of like React, but it has its quirks when introducing reactive state & signals. Be sure to read about the difference of `useState()` in React and `createSignal()` in Solid. Apart from that we tried to avoid Solid-specific code to make the code more readable for anyone with React knowledge.

## Use ToolTip component to give clues & information

You can use the `ToolTip` component in `srx/components/ToolTip.jsx` to give further information to the users.
For example using `<ToolTip content="Information comes here">` renders a button with a question mark which triggers a div popover that says _Information comes here_.
This button can be used anywhere in the app -- you just have to import it.
