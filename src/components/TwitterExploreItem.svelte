<script>
    export let tag;
    export let tweetCount;
</script>

<div class="flex flex-col px-3 py-2 ">
    <div class="flex flex-row justify-between items-center">
        <p class="text-gray-600 font-sans text-sm">Türkiye konumunda gündemde</p>
        <div>
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current text-gray-600">
                <g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g>
            </svg>
        </div>
    </div>
    <div class="">
        <p class="font-sans font-bold">{tag}</p>   
    </div>    
    <div class="mt-1">
        <p class="text-gray-600 font-sans text-xs">{tweetCount} Tweet</p>   
    </div>
    
</div>