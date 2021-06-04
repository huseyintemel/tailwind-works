<script>
    export let imgSrc = null;
    export let titleText = null;
    export let titleDetailText = null;
    export let firstSectionItemText = null;
    export let secondSectionItemText = null;
</script>

<div class="flex flex-col space-y-2 w-full pr-5">
    <div class="">
        <img class="max-w-lg w-full rounded cursor-pointer hover:shadow-md" src={imgSrc} alt="">
    </div>
    <p class="font-sans font-bold text-gray-800 text-2xl mt-8">{titleText}</p>
    <p class="font-sans text-gray-700">{titleDetailText}</p>
    <div class="flex flex-row cursor-pointer text-indigo-500 hover:text-gray-800 items-center">
        <p class="font-sans font-medium">Learn more</p>
        <svg class="h-5 w-5 text-blue-500 hover:text-gray-800 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
    </div>
    <p class="font-sans text-gray-400 text-xs font-medium">IN THIS SECTION</p>
    <div class="flex flex-row space-x-2 items-center">
        <img class="w-2 h-2" src="https://b.stripecdn.com/docs/assets/45c5bc2dba7ca77d6fb3f1019c5a65a1.svg" alt="">
        <p class="font-sans font-medium text-sm cursor-pointer text-indigo-500 hover:text-gray-800">{firstSectionItemText}</p>
    </div>
    <div class="flex flex-row space-x-2 items-center">
        <img class="w-2 h-2" src="https://b.stripecdn.com/docs/assets/45c5bc2dba7ca77d6fb3f1019c5a65a1.svg" alt="">
        <p class="font-sans font-medium text-sm cursor-pointer text-indigo-500 hover:text-gray-800">{secondSectionItemText}</p>
    </div>
</div>