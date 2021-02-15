<script>
    import StackExchangeQuestionItem from "../components/StackExchangeQuestionItem.svelte";
    let tag1=[ ["dnd-5e","spells","sleep"]];
    let tag2=[["publications","graduate-school"]];
    let tag3=[["contract-law","law"]];
</script>
<div class="flex flex-col border-t border-b divide-y max-w-2xl mx-auto m-6 ">
    {#each tag1 as tag }
        <StackExchangeQuestionItem tags={tag} questionTitle={"Can a caster cast a sleep spell on themselves?"} answerCount={"2"} passedTime={"12 hours"} questionOwner={"Alabaster"} questionCategory={"rpg"}  src={"https://cdn.sstatic.net/Sites/rpg/Img/icon-48.png"} />
    {/each}
    {#each tag2 as tag }
        <StackExchangeQuestionItem tags={tag} questionTitle={"Supervisor has said some very disgusting things online, should I pull my name from our paper?"} answerCount={"7"} passedTime={"2 days"} questionOwner={"Charles Averill"} questionCategory={"academia"}  src={"https://cdn.sstatic.net/Sites/physics/Img/icon-48.png?v=f5a02f85db94"} />
        <StackExchangeQuestionItem tags={tag} questionTitle={"Supervisor has said some very disgusting things online, should I pull my name from our paper?"} answerCount={"7"} passedTime={"2 days"} questionOwner={"Charles Averill"} questionCategory={"academia"}  src={"https://cdn.sstatic.net/Sites/physics/Img/icon-48.png?v=f5a02f85db94"} />
        <StackExchangeQuestionItem tags={tag} questionTitle={"Supervisor has said some very disgusting things online, should I pull my name from our paper?"} answerCount={"7"} passedTime={"2 days"} questionOwner={"Charles Averill"} questionCategory={"academia"}  src={"https://cdn.sstatic.net/Sites/physics/Img/icon-48.png?v=f5a02f85db94"} />
    {/each}
    {#each tag3 as tag }
        <StackExchangeQuestionItem tags={tag} questionTitle={"Would a contract to pay a trillion dollars in damages be valid?"} answerCount={"3"} passedTime={"20 hours"} questionOwner={"Michael"} questionCategory={"law"}  src={"https://cdn.sstatic.net/Sites/law/Img/icon-48.png"} />
        <StackExchangeQuestionItem tags={tag} questionTitle={"Would a contract to pay a trillion dollars in damages be valid?"} answerCount={"3"} passedTime={"20 hours"} questionOwner={"Michael"} questionCategory={"law"}  src={"https://cdn.sstatic.net/Sites/law/Img/icon-48.png"} />
        <StackExchangeQuestionItem tags={tag} questionTitle={"Would a contract to pay a trillion dollars in damages be valid?"} answerCount={"3"} passedTime={"20 hours"} questionOwner={"Michael"} questionCategory={"law"}  src={"https://cdn.sstatic.net/Sites/law/Img/icon-48.png"} />
        <StackExchangeQuestionItem tags={tag} questionTitle={"Would a contract to pay a trillion dollars in damages be valid?"} answerCount={"3"} passedTime={"20 hours"} questionOwner={"Michael"} questionCategory={"law"}  src={"https://cdn.sstatic.net/Sites/law/Img/icon-48.png"} />
    {/each}
   
   
</div>