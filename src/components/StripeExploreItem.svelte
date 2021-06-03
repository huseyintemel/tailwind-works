<script>
    import StripeExploreItemIcons from "./StripeExploreItemIcons.svelte";

    export let type = null;
    export let exploreItemTitle = null;
    export let exploreItemDetailText = null;
</script>

<div class="flex flex-col space-y-4 cursor-pointer">
    <StripeExploreItemIcons type={type} />
    <div class="flex flex-col space-y-2">
        <p class="font-sans font-bold text-purple-600 hover:text-purple-800">{exploreItemTitle}</p>
        <p class="font-sans text-gray-500 pr-6">{exploreItemDetailText}</p>
    </div>
</div>