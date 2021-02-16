<script>
    export let imageSrc;
    export let profilImageSrc;
    export let tag;
    export let secondTag;
    export let postTitle;
    export let postDetail;
    export let name;
    export let surname;
    export let postTime;
    export let readCount;
    export let readMinute;

    export let onTitleClicked;

</script>
<div class="flex flex-row m-4 justify-between max-w-4xl relative">
    <div class="flex flex-row"> 
        <img on:click={onTitleClicked} class="sm:flex hidden cursor-pointer" src={imageSrc} width="276" height="244" alt="">
        <div class="flex flex-col pl-8 max-w-md">
            <div class="flex flex-row space-x-2">
                <p class="font-sans text-xs  font-bold text-green-500">{tag}</p>
                {#if secondTag}
                    <p class="font-sans text-xs  font-bold text-green-500">.</p>
                    <p class="font-sans text-xs  font-bold text-green-500">{secondTag}</p>
                {/if}
            </div>
            <div class="flex flex-row space-x-2">
                <p on:click={onTitleClicked} class="font-sans md:text-2xl text-xl hover:text-gray-700 font-bold mt-2 cursor-pointer">{postTitle}</p>
                <img class="sm:hidden mb-4" src={imageSrc} width="100" height="100" alt="">
            </div>
            

            <p class="pt-2 text-gray-700 sm:text-base text-sm">{postDetail}</p>
            <div class="flex flex-row mt-4 space-x-2 items-center whitespace-no-wrap">
                <div class="xl:hidden flex flex-row space-x-1">
                    <svg class="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                    <p class="text-xs font-sans text-gray-700 ">{name} {surname}</p>
                </div>
                <svg class="w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-xs font-sans font-light">{postTime}</p>
                <svg class="w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <p class="text-xs font-sans font-light">{readCount} Reads</p>
                <div class="md:flex hidden flex-row space-x-1">
                    <svg class="w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="text-xs font-sans font-light">{readMinute} min read</p>
                </div>
            </div>
        </div>
    </div>
    <div class="xl:flex hidden flex-col items-center pt-4 absolute right-0 cursor-pointer">
        <img  alt="" class="rounded-full w-16 h-16" src={profilImageSrc}>
        <p class="font-sans text-lg font-semibold text-green-500">{name}</p>
        <p class="font-sans text-lg font-semibold text-green-500">{surname}</p>
    </div>

</div>