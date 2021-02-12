<script>
import TwitterSettingsDetailIcon from "./TwitterSettingsDetailIcon.svelte";

    export let setting;
    export let settingDetail;
    export let icon;
</script>


<div class="flex flex-row border-t border-b justify-between items-center pl-6 pr-4 ">
    <div class="flex flex-row space-x-8 items-center">
        <TwitterSettingsDetailIcon type={icon} />
        <div class="flex flex-col py-3">
            <p class="font-sans break-words text-sm text-gray-800">{setting}</p>
            <p class="font-sans  break-words text-sm text-gray-600">{settingDetail}</p>
        </div>
    </div>
    
    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current text-gray-600"><g><path d="M17.207 11.293l-7.5-7.5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L15.086 12l-6.793 6.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.023 0-1.414z"></path></g></svg>
</div>