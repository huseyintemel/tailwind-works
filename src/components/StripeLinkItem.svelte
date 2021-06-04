<script>
    export let linkText = null;
    export let selected = false;
    export let hasIcon = false;
    export let onClicked = null;

    export function select(){
        selected = true;
    }
    export function deselect(){
        selected = false;
    }
</script>

<div on:click={onClicked} class="inline-flex items-center relative">
    <p class="{selected ? "text-blue-600" :"text-gray-600"} font-sans font-medium text-sm py-3 cursor-pointer whitespace-nowrap text-center">{linkText}</p>
    {#if hasIcon}
        <svg class="h-4 w-4 mt-1 ml-1 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    {/if}
    {#if selected}
        <div class="absolute bottom-0 bg-blue-600 w-full h-0.5"></div>
    {/if}
</div>
