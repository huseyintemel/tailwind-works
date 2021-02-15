<script>
    export let questionTitle;
    export let src;
    export let tags=[];
    export let answerCount;
    export let passedTime;
    export let questionOwner;
    export let questionCategory;
</script>
<div class="flex flex-col p-2">
    <div class="flex flex-row space-x-2">
        <img class="h-8 w-8 cursor-pointer" src={src} alt="">
        <p class=" font-sans text-lg font-light cursor-pointer hover:text-blue-400 text-blue-600">{questionTitle}</p>
    </div>
    <div class="flex flex-row pl-10 space-x-1 items-center whitespace-no-wrap break-words">
        {#each tags as tag }
            <button class="text-xs font-sans rounded-full px-2 bg-gray-200  border">{tag}</button>
        {/each}
        <p class="text-xs text-gray-500 pl-1"> {answerCount} answers</p>
        <span class="text-gray-500  text-xs"> | </span>
        <p class="text-xs text-gray-500">{passedTime} ago</p>
        <p class="flex flex-row items-center space-x-1">
            <span class="text-xs text-gray-500">by</span>
            <span class="text-xs text-blue-600 cursor-pointer">{questionOwner}</span>
            <span class="text-xs text-gray-500">on</span>
            <span class="text-xs text-blue-600 cursor-pointer">{questionCategory}</span>

        </p>
    </div>
</div>
