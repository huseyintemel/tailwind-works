<script>
    import GithubAddCommentIcons from "./GithubAddCommentIcons.svelte";

    export let firstIcon = null;
    export let secondIcon = null;
    export let thirdIcon = null;
</script>
<div class="flex flex-row items-center space-x-4">
    <GithubAddCommentIcons type={firstIcon} />
    <GithubAddCommentIcons type={secondIcon} />
    <GithubAddCommentIcons type={thirdIcon} />
</div>