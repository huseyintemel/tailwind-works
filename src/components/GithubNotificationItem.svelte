<script>
    import NotificationIcons from "./GithubNotificationIcons.svelte";

    export let type = null;
    export let notificationType = null;
    export let userCount = null;

</script>
<div class="flex flex-row divide-x justify-between rounded-md w-32 border">
    <div class="flex flex-row space-x-1 px-3 py-1 items-center">
        <NotificationIcons type={type} />
        <p class="font-sans text-xs">{notificationType}</p>
    </div>
    <div class="font-sans rounded-r-md bg-white text-xs px-3 py-1">
        <p>{userCount}</p>
    </div>
</div>