<script>
import TwitterExploreItem from "../components/TwitterExploreItem.svelte";

</script>
<div class="flex flex-col mx-auto max-w-2xl divide-y border mt-4">
    <div class="px-3 py-2">
        <p class="text-lg font-extrabold font-sans">İlgini çekebilecek gündemler</p>
    </div>
   <TwitterExploreItem tag={"#tag1"} tweetCount={"25,4 B"} />
   <TwitterExploreItem tag={"#tag2"} tweetCount={"47,8 B"} />
   <TwitterExploreItem tag={"tag3"} tweetCount={"7.403"} />
   <TwitterExploreItem tag={"#tag4"} tweetCount={"1.028"} />
   <TwitterExploreItem tag={"#tag5"} tweetCount={"316,8 B"} />

</div>   