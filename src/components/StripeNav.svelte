<script>
    import StripeLinkItem from "./StripeLinkItem.svelte";

    let itemLinks = [];

    let linkTexts = ["Home","Payments","Business operations","Financial Services","Developer Tools","Security","All products"];

    let selected = false;

    function itemClicked(index){
        itemLinks.forEach(function(item, i) {
            if(index == i){
                item.select();
            }
            else{
                item.deselect();
            }
        });
    }

</script>

<div class="flex flex-col space-y-0 lg:space-y-4 border-b border-t bg-white sm:bg-gray-100 w-full sticky top-0 z-20">
    <div class="hidden lg:flex flex-row justify-between px-6 py-5">
        <div class="flex flex-row space-x-1 pr-5 items-center w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="25">
                <path fill="#32325d" d="M5 10.1c0-.6.6-.9 1.4-.9 1.2 0 2.8.4 4 1.1V6.5c-1.3-.5-2.7-.8-4-.8C3.2 5.7 1 7.4 1 10.3c0 4.4 6 3.6 6 5.6 0 .7-.6 1-1.5 1-1.3 0-3-.6-4.3-1.3v3.8c1.5.6 2.9.9 4.3.9 3.3 0 5.5-1.6 5.5-4.5.1-4.8-6-3.9-6-5.7zM29.9 20h4V6h-4v14zM16.3 2.7l-3.9.8v12.6c0 2.4 1.8 4.1 4.1 4.1 1.3 0 2.3-.2 2.8-.5v-3.2c-.5.2-3 .9-3-1.4V9.4h3V6h-3V2.7zm8.4 4.5L24.6 6H21v14h4v-9.5c1-1.2 2.7-1 3.2-.8V6c-.5-.2-2.5-.5-3.5 1.2zm5.2-2.3l4-.8V.8l-4 .8v3.3zM61.1 13c0-4.1-2-7.3-5.8-7.3s-6.1 3.2-6.1 7.3c0 4.8 2.7 7.2 6.6 7.2 1.9 0 3.3-.4 4.4-1.1V16c-1.1.6-2.3.9-3.9.9s-2.9-.6-3.1-2.5H61c.1-.2.1-1 .1-1.4zm-7.9-1.5c0-1.8 1.1-2.5 2.1-2.5s2 .7 2 2.5h-4.1zM42.7 5.7c-1.6 0-2.5.7-3.1 1.3l-.1-1h-3.6v18.5l4-.7v-4.5c.6.4 1.4 1 2.8 1 2.9 0 5.5-2.3 5.5-7.4-.1-4.6-2.7-7.2-5.5-7.2zm-1 11c-.9 0-1.5-.3-1.9-.8V10c.4-.5 1-.8 1.9-.8 1.5 0 2.5 1.6 2.5 3.7 0 2.2-1 3.8-2.5 3.8z"></path>
            </svg>
            <svg viewBox="0 0 59 17" width="59" height="17" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.27.88c4.26 0 7.27 3.2 7.27 7.7 0 4.51-3 7.71-7.27 7.71s-7.28-3.2-7.28-7.7S19 .89 23.27.89zm17.55 0c1.45 0 2.9.37 4.29 1.08v2.56a7.36 7.36 0 0 0-3.81-1.26c-2.88 0-4.87 2.19-4.87 5.33 0 3.11 1.99 5.32 4.87 5.32 1.21 0 2.53-.45 3.8-1.25v2.55a9.32 9.32 0 0 1-4.28 1.08c-4.28 0-7.31-3.2-7.31-7.7s3.03-7.7 7.31-7.7zm12.73 0c1.32 0 2.68.28 4 .82v2.58a7.42 7.42 0 0 0-3.8-1.13c-1.59 0-2.69.8-2.69 2 0 2.96 7.23 1.47 7.23 6.7 0 2.63-2.25 4.44-5.41 4.44-1.43 0-2.92-.32-4.35-1v-2.61a7.73 7.73 0 0 0 4.15 1.34c1.65 0 2.77-.87 2.77-2.12 0-3.05-7.23-1.56-7.23-6.71 0-2.56 2.2-4.3 5.33-4.3zM5.7 1.14c4.27 0 7.3 3.1 7.3 7.45s-3.03 7.44-7.3 7.44H.32V1.14h5.4zm17.56 2.12c-2.58 0-4.35 2.21-4.35 5.33 0 3.11 1.77 5.32 4.35 5.32 2.57 0 4.35-2.2 4.35-5.32s-1.78-5.33-4.35-5.33zm-17.7.2H3.13v10.26h2.42c2.69 0 4.55-2.1 4.55-5.13S8.25 3.46 5.56 3.46z" fill="#556CD6" fill-rule="evenodd"></path>
            </svg>
            <div class="inline-flex items-center relative pl-3 lg:max-w-md xl:max-w-lg w-full">
                <input placeholder="Search documentation..." class="rounded lg:max-w-md xl:max-w-lg w-full px-8 font-sans text-gray-400 py-1.5">
                <svg class="w-3 h-3 text-gray-600 fill-current absolute z-10 mx-3" aria-hidden="true" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6 11.2c.037.028.073.059.107.093l3 3a1 1 0 1 1-1.414 1.414l-3-3a1.009 1.009 0 0 1-.093-.107 7 7 0 1 1 1.4-1.4zM7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10z" fill-rule="evenodd"></path>
                </svg>
                <div class="flex flex-row justify-center items-center bg-gray-100 h-6 w-6 rounded absolute right-2">
                    <p class="text-sm">/</p>
                </div>
            </div>
        </div>
        <div class="flex flex-row items-center space-x-4 py-1">
            <p class="font-sans cursor-pointer hover:text-gray-800 text-sm font-medium text-blue-600 whitespace-nowrap">Create Account</p>
            <button class="text-sm font-medium font-sans bg-white px-2 py-1 rounded border border-gray-300 whitespace-nowrap hover:shadow-md focus:outline-none">Sign in</button>
        </div>
    </div>
    <div class="hidden lg:flex flex-row justify-between px-6">
        <div class="flex flex-row space-x-4">
            {#each linkTexts as text,i}
                <StripeLinkItem selected={i == 0 ? true : false } onClicked={()=>itemClicked(i)} bind:this={itemLinks[i]} linkText={text} />
            {/each}
        </div>
        <div class="flex flex-row space-x-4">
            <StripeLinkItem hasIcon={true} linkText={"APIs & SDKs"} />
            <StripeLinkItem linkText={"Support"} />
        </div>
    </div> 
    <div class="flex lg:hidden flex-row justify-between items-center py-6 px-6 md:px-10">
        <div class="flex flex-row items-center space-x-1">
            <p class="font-sans font-medium text-gray-700">Home</p>
            <svg class="h-4 w-4 mt-1 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
        <div class="flex flex-row items-center space-x-1">
            <p class="font-sans text-sm font-medium cursor-pointer text-gray-700">Sign in</p>
            <svg class="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </div>
    </div>
</div>
