<script>
    export let src="";
    export let groupName;
    export let memberCount;
    export let dailyCount;


</script>
<div class="flex flex-col  rounded-xl max-w-md border sm:mt-0 mt-4">
    <div class="flex flex-row justify-between relative max-w-md">
        <img style="width:424px;height:238px" class="rounded-t-xl " src={src} alt="">
        <svg class="h-12 w-12 flex-shrink-0 right-0 m-2 text-gray-800 absolute" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </div>
    <p class="font-sans font-semibold pl-4 pt-1">{groupName}</p>
    <div class="flex flex-row pl-4 items-center space-x-1">
        <p class="font-sans text-gray-600 text-center">{memberCount} Üye</p>
        <p class="text-gray-600 text-center text-sm"> • </p>
        <p class="font-sans text-gray-600 text-center">Günde {dailyCount} gönderi</p>
    </div>

    <button class="mx-4 my-4 border max-w-lg font-sans font-semibold p-1 rounded-lg bg-gray-200">Gruba Katıl</button>

</div>