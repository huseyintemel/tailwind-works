<script>
    export let hasSecondLabel = false;
    export let personImgSrc = null;
    export let personName = null;
    export let commentDate = null;
    export let firstLabel = null;
    export let secondLabel = null;
    export let commentText = null;
    export let hasLike = false;
    export let likeCount = null;
    export let hasLabel = true;
</script>  
<div class="flex flex-row space-x-4">
    <div class="flex-shrink-0 cursor-pointer">
        <img src={personImgSrc} class="w-10 h-10 rounded-full" alt="" />
    </div>
    <div class="flex flex-col divide-y divide-gray-200 border w-full md:max-w-4xl h-full rounded-md">
        <div class="w-full h-full px-6 py-2 bg-gray-100 relative">
            <div class="flex flex-row items-center w-full justify-between">
                <div class="flex flex-row space-x-1 items-center">
                    <span class="font-sans text-sm text-gray-700 cursor-pointer hover:text-blue-500 hover:underline font-semibold">{personName}</span>
                    <span class="font-sans text-sm ml-1 text-gray-500">commented</span>
                    <span class="font-sans text-sm flex-wrap hover:text-blue-500 hover:underline overflow-auto cursor-pointer text-gray-500 whitespace-nowrap">  on {commentDate}</span>
                </div>
                <svg class="absolute w-6 h-6 left-0 top-0 text-gray-100 -ml-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M15 19l-7-7 7-7" />
                </svg>
                <div class="flex flex-shrink-0 flex-row space-x-3 items-center">
                    {#if hasLabel}
                        <div class="hidden sm:flex px-3 py-0.5 font-sans font-medium shadow-sm text-xs text-gray-600 border rounded-r-2xl rounded-l-2xl">
                            {firstLabel}
                        </div>
                    {/if}
                    {#if hasSecondLabel}
                        <div class="hidden sm:flex px-3 py-0.5 font-sans font-medium shadow-sm text-xs text-gray-600 border rounded-r-2xl rounded-l-2xl">
                            {secondLabel}
                        </div>
                    {/if}
                    <svg class="hidden sm:flex h-4 w-4 cursor-pointer text-gray-600 hover:text-blue-500 fill-current" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                        <path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path>
                    </svg>
                    <svg class="h-4 w-4 cursor-pointer text-gray-600 hover:text-blue-500 fill-current" aria-label="Show options" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                        <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                </div>
            </div>
            
        </div>
        <div class="bg-white px-6 py-4">
            <p class="font-sans text-sm">{@html commentText}</p>
        </div>
        {#if hasLike}
            <div class="flex flex-row divide-x">
                <button class="inline-flex items-center px-6 py-2 focus:outline-none">
                    <g-emoji alias="thumbs up" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png" class="emoji mr-1">👍</g-emoji>
                    <p class="font-sans text-sm ml-1 text-blue-500">{likeCount}</p>
                </button>
                <div></div>
            </div>
        {/if}
    </div>
</div>