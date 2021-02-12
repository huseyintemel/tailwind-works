<script>
    import EdxCourseItem from "../components/EdxCourseItem.svelte";

    let bgImages=["https://prod-discovery.edx-cdn.org/media/programs/card_images/3c32e3e0-b6fe-4ee4-bd4f-210c6339e074-09fdeca85b81.jpg","https://prod-discovery.edx-cdn.org/media/programs/card_images/d8b4bdef-d2ee-4232-8504-6a0342283cb5-12addd6a907d.jpg","https://prod-discovery.edx-cdn.org/media/programs/card_images/8e1758c8-b64c-428f-bd1b-f8df8ed81020-58efabef57a0.jpg","https://prod-discovery.edx-cdn.org/media/programs/card_images/18ff3b25-81ca-4324-b3da-425277a9ee02-bdfbb53cac23.jpg"]
    let logoImages=["https://prod-discovery.edx-cdn.org/organization/logos/44022f13-20df-4666-9111-cede3e5dc5b6-2cc39992c67a.png","https://prod-discovery.edx-cdn.org/organization/logos/bc823bd7-b910-4e23-a5fd-ac7283f02c1e-8a1471d5bf21.png","https://prod-discovery.edx-cdn.org/organization/logos/87b07564-d569-4cfd-bee6-8b0a407acb73-dc33e4b5f353.png","https://prod-discovery.edx-cdn.org/organization/logos/de3e9ff0-477d-4496-8cfa-a98f902e5830-71b79f0ac34a.png"];
    let buttonNames=["Data Science","Business","Computer Science","Engineering","Design"];
</script>
<div class="flex flex-col px-20 py-4 space-y-10">
    <h1 class=" font-sans font-bold md:text-6xl text-3xl">Explore top courses</h1>
    <div class="flex flex-row space-x-4">
        {#each buttonNames as name,i}
            {#if i == 0}
                <button class="font-sans flex-shrink-0 border bg-white hover:bg-black hover:text-white font-medium w-40 h-10">{name}</button>   
            {:else}
                <button class="font-sans flex-shrink-0 font-medium opacity-50 hover:bg-gray-400 w-40 h-10">{name}</button>   
            {/if}
        {/each}
        

    </div>

    <div class="flex flex-row space-x-2">
        <EdxCourseItem bgImage={bgImages[0]} logoImage={logoImages[0]} courseName={"Data  Science"} courseOwner={"HarvardX"} type={"Professional Certificate"} courseCount={"9"} />
        <EdxCourseItem bgImage={bgImages[1]} logoImage={logoImages[1]} courseName={"Predictive Analytics using Python"} courseOwner={"EdinburghX"} type={"MicroMasters Program"} courseCount={"5"} />
        <EdxCourseItem bgImage={bgImages[2]} logoImage={logoImages[2]} courseName={"Data Science Foundations"} courseOwner={"IBM"} type={"Professional Certificate"} courseCount={"4"} />
        <EdxCourseItem bgImage={bgImages[3]} logoImage={logoImages[3]} courseName={"Data Analysis for Decision-Making"} courseOwner={"RITx"} type={"Professional Certificate"} courseCount={"3"} />
    </div>

</div>

