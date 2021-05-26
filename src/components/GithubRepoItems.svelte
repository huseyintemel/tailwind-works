<script>
    import GithubRepoItem from "./GithubRepoItem.svelte";
</script>
<div class="flex flex-row px-8 justify-between items-center">
    <div class="flex flex-row">
        <div class="flex flex-row">
            <GithubRepoItem type={"code"} repoName={"Code"} />
            <GithubRepoItem type={"issue"} repoName={"Issues"} selected={true} hasNumber={true} number={"2"} />
            <GithubRepoItem type={"pull"} repoName={"Pull Requests"} hasNumber={true} number={"2"} />
            <GithubRepoItem type={"action"} repoName={"Actions"} />
        </div>
        <div class="hidden md:flex">
            <GithubRepoItem type={"project"} repoName={"Projects"} />
        </div>
        <div class="hidden md:flex">
            <GithubRepoItem type={"wiki"} repoName={"Wiki"} />
        </div>
        <div class="hidden lg:flex">
            <GithubRepoItem type={"security"} repoName={"Security"} />
        </div>
        <div class="hidden lg:flex">
            <GithubRepoItem type={"insights"} repoName={"Insights"} />
        </div>
    </div>
   <div>
    <svg class="flex md:hidden w-4 h-4" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
        <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
    </svg>
   </div>
</div>