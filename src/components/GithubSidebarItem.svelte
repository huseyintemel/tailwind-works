<script>
    export let sidebarItemTitle = null;
    export let sidebarItemDetail = null;
</script>
<div class="flex flex-col flex-shrink-0 space-y-3 py-4">
    <p class="font-sans text-xs font-medium text-gray-700">{sidebarItemTitle}</p>
    <p class="font-sans text-xs text-gray-400">{@html sidebarItemDetail}</p>
</div>