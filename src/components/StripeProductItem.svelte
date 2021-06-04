<script>
    import StripeProductItemIcons from "./StripeProductItemIcons.svelte";
    
    export let type = null;
    export let productitemTitle = null;
    export let productitemDetail = null;
</script>

<div class="flex flex-row items-center cursor-pointer">
    <StripeProductItemIcons type={type} />
    <div class="flex flex-col px-4 space-y-1">
        <p class="font-sans font-semibold text-sm">{productitemTitle}</p>
        <p class="font-sans text-sm text-gray-600 break-words">{productitemDetail}</p>
    </div>
</div>