# svelte-transition-error
Demo for svelte transition bug: https://stackoverflow.com/q/72951029/13256628

## how to run
- `npm/pnpm i`
- `npm/pnpm build`
- open index.html in a browser
- click on a link and follow the instructions on the page

## the error thrown in chrome
```
custom-button.js:313 Uncaught (in promise) TypeError: Cannot read properties of null (reading 'insertRule')
    at create_rule (custom-button.js:313:20)
    at go (custom-button.js:540:34)
    at Object.run (custom-button.js:594:17)
    at Object.outro [as o] (custom-button.js:824:23)
    at transition_out (custom-button.js:491:15)
    at Object.update [as p] (custom-button.js:936:9)
    at update (custom-button.js:439:36)
    at flush (custom-button.js:406:13)
```
