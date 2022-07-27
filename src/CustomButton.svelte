<!-- TODO: 
    - [ ] click feedback
-->
<svelte:options tag="custom-button" />

<script>
    import { fade } from 'svelte/transition';
    import { onDestroy } from 'svelte';

    let state = 'clickable';
    let transitionTimer;

    onDestroy(() => {
        clearTimeout(transitionTimer);
    });

    function clickEvent(event) {
        if (state === 'clickable') {
            state = 'clicked';

            transitionTimer = setTimeout(() => {
                state = 'clickable';
            }, 3000);
        }
    }
</script>

<button type="button" on:click={(event) => clickEvent(event)}>
    {#if state === 'clickable'}
        <span transition:fade>Click me</span>
    {:else}
        <span transition:fade>I have been clicked!</span>
    {/if}
</button>

<style>
    button {
        display: inline-grid;
        align-items: center;
        user-select: none;
        cursor: pointer;

        padding: 7px 14px;
    }

    button > span {
        grid-row: 1;
        grid-column: 1;
    }
</style>
