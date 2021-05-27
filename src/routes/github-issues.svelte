<script>
    import GithubIssuesHeader from "../components/GithubIssuesHeader.svelte";
    import GithubNav from "../components/GithubNav.svelte";
    import GithubNotificitionItem from "../components/GithubNotificationItem.svelte";
    import GithubRepoItems from "../components/GithubRepoItems.svelte";
    import GithubCommentItem from "../components/GithubCommentItem.svelte";
    import GithubSidebarItem from "../components/GithubSidebarItem.svelte";
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
    <div class="flex flex-col divide-y px-4 lg:px-8 mt-8 mb-12">
        <GithubIssuesHeader />
        <div class="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 w-full h-full px-0 lg:px-8 pt-8">
            <div class="w-full md:w-3/4 flex-shrink-0">
                <GithubCommentItem personName={"kevmodrome"} firstLabel={"Collaborator"} hasLike={true} likeCount={"2"} commentDate={"2 Sep 2020"} commentText={"Should we try to move this stuff over to sveltesociety?"} personImgSrc={"https://avatars.githubusercontent.com/u/534488?s=88&u=5b55eb8ff531f5295289e01d0061583c33e8c81d&v=4"}/>
                <div class="bg-gray-200 w-0.5 h-8 ml-20 -mx-6"></div>
                <GithubCommentItem personName={"sw-yx"} firstLabel={"Collaborator"} commentDate={"2 Sep 2020"} commentText={"i'm ok with it, but definitely feeling a bit of repo churn fatigue"} personImgSrc={"https://avatars.githubusercontent.com/u/6764957?s=88&u=97ad815028595b73b06ee4b0510e66bbe391228d&v=4"} />
                <div class="bg-gray-200 w-0.5 h-8 ml-20 -mx-6"></div>
                <GithubCommentItem personName={"kevmodrome"} firstLabel={"Collaborator"} hasLike={true} likeCount={"1"} hasSecondLabel={true} secondLabel={"Author"} commentDate={"2 Sep 2020"} commentText={"Yep! Same here"} personImgSrc={"https://avatars.githubusercontent.com/u/534488?s=88&u=5b55eb8ff531f5295289e01d0061583c33e8c81d&v=4"} />
                <div class="bg-gray-200 w-0.5 h-8 ml-20 -mx-6"></div>
                <GithubCommentItem personName={"frederikhors"} firstLabel={"Contributor"} hasLike={true} likeCount={"3"} commentDate={"2 Sep 2020"} commentText={"Please never get tired! You are wonderful! <br> Let's look together for a way to automate as much as possible?"} personImgSrc={"https://avatars.githubusercontent.com/u/41120635?s=88&u=b6b24220d763e5da869a5fb7d94edbd6bce288c9&v=4"} />
                <div class="bg-gray-200 w-0.5 h-8 ml-20 -mx-6"></div>
                <GithubCommentItem personName={"kevmodrome"} firstLabel={"Collaborator"} hasSecondLabel={true} secondLabel={"Author"} commentDate={"2 Sep 2020"} commentText={"It's not going away, don't worry! There's already a semi-working component page on the sveltesociety website: <br> <a href=https://sveltesociety.dev/components>https://sveltesociety.dev/components</a> <br> You're very welcome to take it to the finish line! :)"} personImgSrc={"https://avatars.githubusercontent.com/u/534488?s=88&u=5b55eb8ff531f5295289e01d0061583c33e8c81d&v=4"} />
                <div class="bg-gray-200 w-0.5 h-8 ml-20 -mx-6"></div>
                <GithubCommentItem personName={"TheComputerM"} firstLabel={"Contributor"} hasLabel={false} commentDate={"1 Oct 2020"} commentText={"If you want you can take showcase entries from here. This has a very easy contributing process to add new entries."} personImgSrc={"https://avatars.githubusercontent.com/u/24741538?s=88&u=562d93c8591884c87c12beceffab21aef657826b&v=4"} />
            </div>
            <div class="flex flex-col divide-y my-6 h-full w-full md:w-1/4 mt-4">
                <GithubSidebarItem sidebarItemTitle={"Assignees"} sidebarItemDetail={"No one assigned"} />
                <GithubSidebarItem sidebarItemTitle={"Labels"} sidebarItemDetail={"None yet"} />
                <GithubSidebarItem sidebarItemTitle={"Projects"} sidebarItemDetail={"None yet"} />
                <GithubSidebarItem sidebarItemTitle={"Milestone"} sidebarItemDetail={"No milestone"} />
                <GithubSidebarItem sidebarItemTitle={"Linked pull requests"} sidebarItemDetail={"Successfully merging a pull request may close this issue.<br>None yet"} />
                <div class="flex flex-col space-y-2 py-4">
                    <div class="flex flex-row justify-between cursor-pointer">
                        <p class="font-sans text-xs font-medium hover:text-blue-500 text-gray-700">Notifications</p>
                        <p class="font-sans text-xs text-gray-400 hover:text-blue-500">Customize</p>
                    </div>
                    <button class="inline-flex items-center justify-center hover:bg-gray-200 bg-gray-100 w-full rounded-md py-1 px-4">
                        <svg class="w-4 h-4 text-gray-600 fill-current" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                            <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path><path fill-rule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path>
                        </svg>
                        <p class="font-sans text-sm text-center ml-2">Subscribe</p>
                    </button>
                    <p class="font-sans text-gray-400 text-xs">You’re not receiving notifications from this thread.</p>
                </div>
                <div class="flex flex-col space-y-2 py-4">
                    <p class="">4 participants</p>
                    <div class="flex flex-row space-x-1">
                        <img class="w-6 h-6 rounded-full cursor-pointer" src="https://avatars.githubusercontent.com/u/534488?s=52&amp;v=4" alt="@kevmodrome">
                        <img class="w-6 h-6 rounded-full cursor-pointer" src="https://avatars.githubusercontent.com/u/6764957?s=52&amp;v=4"  alt="@sw-yx">
                        <img class="w-6 h-6 rounded-full cursor-pointer" src="https://avatars.githubusercontent.com/u/24741538?s=52&amp;v=4" alt="@TheComputerM">
                        <img class="w-6 h-6 rounded-full cursor-pointer" src="https://avatars.githubusercontent.com/u/41120635?s=52&amp;v=4" alt="@frederikhors">
                    </div>
                </div>
            </div>
        </div>    
    </div>
    <div class="flex flex-col space-y-2 lg:space-y-0 lg:flex-row items-center justify-center lg:justify-start border-t px-8 py-12">
       <div class="flex flex-row space-x-4 lg:space-x-8 xl:space-x-14">
            <p class="font-sans text-xs sm:text-sm lg:text-xs text-gray-600 whitespace-nowrap">© 2021 GitHub, Inc.</p>
            <p class="font-sans text-xs sm:text-sm lg:text-xs text-blue-500 hover:underline cursor-pointer">Terms</p>
            <p class="font-sans text-xs sm:text-sm lg:text-xs text-blue-500 hover:underline cursor-pointer">Privacy</p>
            <p class="font-sans text-xs sm:text-sm lg:text-xs text-blue-500 hover:underline cursor-pointer">Security</p>
            <p class="font-sans text-xs sm:text-sm lg:text-xs text-blue-500 hover:underline cursor-pointer">Status</p>
            <p class="font-sans text-xs sm:text-sm lg:text-xs text-blue-500 hover:underline cursor-pointer">Docs</p>
        </div>
       <svg class="w-6 h-6 flex-shrink-0 mx-0 lg:mx-12 hidden lg:flex text-gray-200 hover:text-gray-500 cursor-pointer fill-current" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
       </svg>
       <div class="flex flex-row space-x-4 lg:space-x-8 xl:space-x-14">
            <p class="font-sans text-xs sm:text-sm lg:text-xs text-blue-500 hover:underline cursor-pointer whitespace-nowrap">Contact Github</p>
            <p class="font-sans text-xs sm:text-sm lg:text-xs text-blue-500 hover:underline cursor-pointer">Pricing</p>
            <p class="font-sans text-xs sm:text-sm lg:text-xs text-blue-500 hover:underline cursor-pointer">API</p>
            <p class="font-sans text-xs sm:text-sm lg:text-xs text-blue-500 hover:underline cursor-pointer">Training</p>
            <p class="font-sans text-xs sm:text-sm lg:text-xs text-blue-500 hover:underline cursor-pointer">Blog</p>
            <p class="font-sans text-xs sm:text-sm lg:text-xs text-blue-500 hover:underline cursor-pointer">About</p>
       </div>
    </div>
</div>