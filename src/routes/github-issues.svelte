<script>
    import GithubNav from "../components/GithubNav.svelte";
    import GithubNotificitionItem from "../components/GithubNotificationItem.svelte";
    import GithubRepoItems from "../components/GithubRepoItems.svelte";
</script>
<GithubNav />
<div class="flex flex-col">
    <div class="flex flex-col bg-gray-100">
        <div class="flex flex-row justify-between px-8 py-4">
            <div class="flex flex-row space-x-1 items-center">
                <svg class="h-4 w-4 mr-2" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
                    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                </svg>
                <p class="font-sans cursor-pointer text-blue-600 text-xl hover:underline">sveltejs</p>
                <p class="font-sans text-gray-500 text-xl">/</p>
                <p class="font-sans cursor-pointer text-blue-600 font-semibold text-xl hover:underline">community</p>
            </div>
            <div class="hidden md:flex flex-row space-x-4">
                <GithubNotificitionItem type={"watch"} notificationType={"Watch"} userCount={"16"} />
                <GithubNotificitionItem type={"star"}  notificationType={"Star"} userCount={"570"} />
                <GithubNotificitionItem type={"fork"}  notificationType={"Fork"} userCount={"320"} />
            </div>
        </div>
        <div class="">
            <GithubRepoItems />
        </div>
    </div>
  

</div>