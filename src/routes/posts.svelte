<script>
    import PostItem from "../components/PostItem.svelte"
    import { goto } from '@sapper/app';

    let images=["https://cdn.searchenginejournal.com/wp-content/uploads/2021/02/b811f9af-b899-4565-9d86-dd86de27d2e4-602aa77aa281c-276x244.jpeg","https://cdn.searchenginejournal.com/wp-content/uploads/2021/02/295880da-043f-4e46-b81a-8e28135fb938-6028799a23d40-276x244.jpeg","https://cdn.searchenginejournal.com/wp-content/uploads/2020/10/4-5f8d55d52a561-276x244.jpg"]
    let profilImages=["https://cdn.searchenginejournal.com/wp-content/uploads/2020/12/facbdec4-0f22-4eb4-acdd-cb53e4ec2629-5fcfd5def3a99-65x65.jpeg","https://cdn.searchenginejournal.com/wp-content/uploads/2019/02/Lisa-Raehsler-2019-400-1-65x65.jpg"]
    let titles=["Twitter Eyes Subscriptions for Premium Features","Facebook & Instagram Shops Integrate With Shopify","How to Develop Your PPC Strategy"]
    let  postDetails=["Twitter is reportedly looking to add a new stream of revenue by offering premium features through a monthly subscription.","Facebook and Instagram Shops are adding Shopify as a payment option which is estimated to increase conversion rates by 1.72x.","A successful PPC campaign begins with a goal-oriented strategy. Learn five common PPC goals and what you can do to accomplish each one"]
    let links=["https://www.searchenginejournal.com/twitter-eyes-subscriptions-for-premium-features/395976/","https://www.searchenginejournal.com/facebook-instagram-shops-integrate-with-shopify/395950/","https://www.searchenginejournal.com/ppc-guide/how-to-develop-ppc-strategy/"]
</script>

<div class="flex flex-col space-y-6 m-6">
    <PostItem onTitleClicked={()=>goto(links[0])} imageSrc={images[0]} profilImageSrc={profilImages[0]} postTitle={titles[0]} postDetail={postDetails[0]}  tag={"NEWS"}  secondTag={"TWITTER"} name={"Matt"} surname={"Southern"} postTime={"16 hours ago"} readCount={"319"} readMinute={"3"} />
    <PostItem onTitleClicked={()=>goto(links[1])} imageSrc={images[1]} profilImageSrc={profilImages[0]} postTitle={titles[1]} postDetail={postDetails[1]}  tag={"NEWS"}  name={"Matt"} surname={"Southern"} postTime={"2/13/2021"} readCount={"9.8K"} readMinute={"3"} />
    <PostItem onTitleClicked={()=>goto(links[2])} imageSrc={images[2]} profilImageSrc={profilImages[1]} postTitle={titles[2]} postDetail={postDetails[2]}  tag={"PAID SEARCH"}  name={"Lisa"} surname={"Raehsler"} postTime={"2/13/2021"} readCount={"9.4K"} readMinute={"5"} />
</div>
   