<script>
    import GithubRepoIcons from "./GithubRepoIcons.svelte";

    export let type = null;
    export let repoName = null;
    export let hasNumber = false;
    export let number = null;
    export let selected = false;
    export let hoverVisible = false;
</script>
<div on:mouseenter={()=>hoverVisible = true} on:mouseleave={()=>hoverVisible = false} class="flex flex-row space-x-1 md:space-x-2 cursor-pointer items-center px-4 py-2 relative">
    <GithubRepoIcons selected={selected} type={type} />
    <p class="font-sans text-sm text-center whitespace-nowrap {selected ? "text-black" : "text-gray-800"}">{repoName}</p>
    {#if hasNumber}
        <div class="flex flex-row items-center justify-center bg-gray-200 w-6 h-6 rounded-full">
            <p class="font-sans text-sm">{number}</p>
        </div>
    {/if}
    {#if selected}
        <div class="absolute bottom-0 left-0 bg-red-400 w-full h-0.5"></div>
    {/if}
    {#if hoverVisible && !selected}
        <div class="absolute bottom-0 left-0 bg-gray-300 w-full h-0.5"></div>
    {/if}
</div>