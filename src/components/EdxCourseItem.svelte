<script>
    export let bgImage;
    export let logoImage;
    export let courseName;
    export let courseOwner;
    export let type;
    export let courseCount;
</script>
<div class="flex flex-col rounded-md w-64 h-72 flex-shrink-0 border mt-4 relative ">
    <div class="flex flex-row justify-between relative">
        <img style="width:350px;height:90px" class="rounded-t-md flex-shrink-0" src={bgImage}  alt="">
    </div>
    <div class="h-16 w-24 p-1 rounded-md border mt-10 ml-6 bg-white absolute">
        <img style="width:93px;height:47px" class="" src={logoImage}  alt="">
    </div>  
    <div class="flex flex-col justify-between h-44">
        <p class="text-xl font-medium text-gray-700 font-sans mt-4 ml-6 ">{courseName}</p>
        <p class="text-sm text-gray-600 font-sans ml-6 mt-1">{courseOwner}</p>
        <div class="flex flex-row space-x-1 ml-4 mt-12">
            <span class="text-sm text-gray-600 font-sans">{type}</span>
            <span class="text-sm text-gray-600 font-sans">({courseCount} courses)</span>
        </div>
    </div>
</div>
