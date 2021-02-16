<script>
    export let title;
    export let description;

</script>

<div class="flex flex-row mt-4 max-w-2xl break-words space-x-2 cursor-pointer">
    <div>
        <svg class="h-8 w-8 hover:text-gray-600 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </div>
    <div class="flex flex-col">
        <h4 class="font-sans text-gray-800 hover:text-gray-600  font-bold">{title}</h4>
        {#if description}
            <p class="font-sans text-sm text-gray-700">{description}</p>
        {/if}
    </div>
</div>