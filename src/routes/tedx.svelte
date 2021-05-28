<script>
    import TedxAboutItemDetail from "../components/TedxAboutItemDetail.svelte";
    import TedxAboutItem from "../components/TedxAboutItem.svelte";
</script>
<div class="flex flex-col mx-20 my-8 divide-y-2">
    <div class="flex md:flex-row flex-col justify-between">
        <div class="flex flex-col  divide-y-2">
            <div class="flex flex-col max-w-xl">
                <TedxAboutItem header={"Organize your first TEDx event"} headerDetail={"Planning and designing a TEDx event is a big endeavor. Here's everything you need to help you organize your next TEDx event."} />
                <div class="flex flex-col space-y-4 mb-8">
                    <TedxAboutItemDetail title={"Before you start"} description={"What you need to know before you apply for a license"} />
                    <TedxAboutItemDetail title={"Apply for a license"} description={"Start the application process to host your own TEDx event"} />
                </div>
            </div>
            <div class="flex flex-col max-w-xl">
                <TedxAboutItem header={"Attend a TEDx event"} headerDetail={"Attend a TEDx event near you featuring live speakers and TED Talk videos, sparking conversation and connections."} />
                <div class="flex flex-col space-y-4 mb-8">
                    <TedxAboutItemDetail title={"Find an event near you"} />
                </div>
            </div>
            <div class="flex flex-col max-w-xl">
                <TedxAboutItem header={"Partner with TEDx"} headerDetail={"When you support the TEDx program, you enable our efforts to empower and grow the global TEDx community of volunteers."} />
                <div class="flex flex-col space-y-4 mb-8">
                    <TedxAboutItemDetail title={"Partner with TEDx"} />
                </div>
            </div>
        </div>
        <div class="flex flex-col divide-y-2">
            <div class="flex flex-col max-w-xl">
                <TedxAboutItem header={"Already an organizer?"} headerDetail={"Bring the global TED experience to your community through a combination of live speakers and TED Talk videos."} />
                <div class="flex flex-col space-y-4 mb-8">
                    <TedxAboutItemDetail title={"Organizer guide"} description={"General instructions and best practices from experienced conference hosts"} />
                    <TedxAboutItemDetail title={"Resources"} description={"A place where organizers can spark connection and peer learning"} />
                </div>
            </div>
            <div class="flex flex-col max-w-xl">
                <TedxAboutItem header={"Watch TEDx talks"} headerDetail={"Dive into our library of TEDx Talks - local speakers presenting to local audiences about everything from politics to pollination. "} />
                <div class="flex flex-col space-y-4 mb-8">
                    <TedxAboutItemDetail title={"Browse the library of TEDx talks"} />
                </div>
            </div>
            <div class="flex flex-col max-w-xl">
                <TedxAboutItem header={"Want to learn more about TEDx?"} headerDetail={"Want to be up to date on current TEDx news? Sign up here and we'll send you exciting updates on the world of TEDx.  "} />
                <div class="flex flex-col space-y-4 mb-8">
                    <p class="mt-8 font-medium text-sm font-sans">Subscribe to get the latest TEDx news!</p>
                    <input class="border rounded-md font-sans  w-full p-2" placeholder="Enter email" >
                    <button class="h-10 w-32 bg-gray-300 hover:bg-gray-400 font-semibold font-sans  rounded-md ">Subscribe</button>
                </div>
            </div>
        </div>    
    </div>

</div>