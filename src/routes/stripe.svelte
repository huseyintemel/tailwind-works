<script>
    import StripeExploreItem from "../components/StripeExploreItem.svelte";
    import StripeImageItem from "../components/StripeImageItem.svelte";
    import StripeNav from "../components/StripeNav.svelte";
    import StripeProductItem from "../components/StripeProductItem.svelte";
</script>

<StripeNav />
<div class="flex flex-col max-w-6xl mb-16 w-full mx-auto">
    <div class="bg-pink-50 mt-8 py-7 px-8 w-full">
        <div class="flex flex-col space-y-3">
            <div class="flex flex-row justify-between items-center space-x-1">
                <svg width="162" height="23" viewBox="0 0 162 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M155.879 18.2525C158.763 18.2525 161.173 16.6656 161.173 14.0242C161.173 11.1614 158.536 10.6341 156.385 10.1807C154.614 9.79584 153.633 9.5955 153.633 8.57795C153.633 7.62895 154.54 7.01209 155.858 7.01209C157.366 7.01209 158.42 7.73966 159.211 8.8152L161.041 7.0859C160.097 5.77311 158.273 4.77139 155.937 4.77139C153.132 4.77139 150.907 6.33725 150.907 8.83629C150.907 11.425 153.09 12.0471 155.109 12.5005C157.145 12.9381 158.426 13.1015 158.426 14.3036C158.426 15.4161 157.387 16.0171 155.979 16.0171C154.493 16.0171 153.043 15.2526 152.041 13.8871L150.138 15.6744C151.229 17.2508 153.602 18.2525 155.879 18.2525ZM138.739 18.0522V9.03137L145.071 18.0522H147.481V4.96646H144.823V13.5497L138.887 4.96646H136.082V18.0522H138.739ZM126.365 15.9011C124.235 15.9011 122.748 14.1876 122.748 11.5093C122.748 8.83102 124.235 7.11754 126.365 7.11754C128.474 7.11754 129.961 8.83102 129.961 11.5093C129.961 14.1876 128.474 15.9011 126.365 15.9011ZM126.365 18.2525C130.077 18.2525 132.75 15.4635 132.75 11.5093C132.75 7.55514 130.077 4.76611 126.365 4.76611C122.638 4.76611 119.959 7.55514 119.959 11.5093C119.959 15.4635 122.632 18.2525 126.365 18.2525ZM116.643 18.0522V4.96646H113.875V18.0522H116.643ZM105.397 18.2525C108.281 18.2525 110.691 16.6656 110.691 14.0242C110.691 11.1614 108.055 10.6341 105.904 10.1807C104.132 9.79584 103.151 9.5955 103.151 8.57795C103.151 7.62895 104.053 7.01209 105.376 7.01209C106.884 7.01209 107.939 7.73966 108.729 8.8152L110.559 7.0859C109.615 5.77311 107.791 4.77139 105.455 4.77139C102.651 4.77139 100.426 6.33725 100.426 8.83629C100.426 11.425 102.608 12.0471 104.628 12.5005C106.663 12.9381 107.944 13.1015 107.944 14.3036C107.944 15.4161 106.905 16.0171 105.498 16.0171C104.011 16.0171 102.561 15.2526 101.559 13.8871L99.6559 15.6744C100.747 17.2508 103.12 18.2525 105.397 18.2525ZM92.3855 18.2525C95.2694 18.2525 97.6788 16.6656 97.6788 14.0242C97.6788 11.1614 95.0427 10.6341 92.8916 10.1807C91.1201 9.79584 90.1395 9.5955 90.1395 8.57795C90.1395 7.62895 91.0411 7.01209 92.3644 7.01209C93.8723 7.01209 94.9267 7.73966 95.7175 8.8152L97.547 7.0859C96.6033 5.77311 94.7791 4.77139 92.4435 4.77139C89.6386 4.77139 87.4138 6.33725 87.4138 8.83629C87.4138 11.425 89.5965 12.0471 91.6157 12.5005C93.6508 12.9381 94.932 13.1015 94.932 14.3036C94.932 15.4161 93.8933 16.0171 92.4857 16.0171C90.9989 16.0171 89.549 15.2526 88.5473 13.8871L86.644 15.6744C87.7301 17.2508 90.1026 18.2525 92.3855 18.2525ZM84.4138 18.0522V15.7377H77.8024V12.4952H83.3383V10.1965H77.8024V7.28098H84.4138V4.96646H75.0714V18.0522H84.4138ZM66.5989 18.2525C69.4828 18.2525 71.8922 16.6656 71.8922 14.0242C71.8922 11.1614 69.2561 10.6341 67.105 10.1807C65.3336 9.79584 64.3529 9.5955 64.3529 8.57795C64.3529 7.62895 65.2598 7.01209 66.5778 7.01209C68.0857 7.01209 69.1401 7.73966 69.931 8.8152L71.7604 7.0859C70.8167 5.77311 68.9925 4.77139 66.6569 4.77139C63.8521 4.77139 61.6272 6.33725 61.6272 8.83629C61.6272 11.425 63.8099 12.0471 65.8292 12.5005C67.8642 12.9381 69.1454 13.1015 69.1454 14.3036C69.1454 15.4161 68.1068 16.0171 66.6991 16.0171C65.2123 16.0171 63.7624 15.2526 62.7607 13.8871L60.8574 15.6744C61.9435 17.2508 64.316 18.2525 66.5989 18.2525Z" fill="#635BFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.4057 14.0716C9.4057 16.7394 7.32843 18.2578 4.24943 18.2578C2.97355 18.2578 1.61858 18.01 0.242524 17.4195V13.8818C1.48677 14.5567 3.02627 15.0628 4.24943 15.0628C5.07718 15.0628 5.62549 14.8414 5.62549 14.156C5.63076 12.3898 0 13.0541 0 8.95756C0 6.33725 2.04563 4.76612 5.05082 4.76612C6.27925 4.76612 7.50241 4.95592 8.73085 5.44624V8.9312C7.60259 8.32489 6.17381 7.97692 5.04554 7.97692C4.27052 7.97692 3.7433 8.20363 3.7433 8.7783C3.7433 10.4443 9.4057 9.6535 9.4057 14.0716ZM13.8186 13.439C13.8186 15.6217 16.1542 14.9416 16.6287 14.7518V17.7675C16.1331 18.0364 15.2421 18.2578 14.0295 18.2578C11.8309 18.2578 10.1807 16.6392 10.1807 14.446L10.1965 2.59922L13.8133 1.82947L13.8186 5.01391H16.6287V8.17199H13.8186V13.439ZM21.5108 9.19481V17.9942H17.8097V5.01391H21.1259L21.2419 6.11054C22.1435 4.51832 24.0046 4.83993 24.5002 5.01919V8.42506C24.0256 8.26689 22.4387 8.03491 21.5108 9.19481ZM25.3912 0.790838L29.1081 0V3.021L25.3912 3.81184V0.790838ZM25.3912 5.01391H29.1081V17.9942H25.3912V5.01391ZM35.9673 8.04546C35.1185 8.04546 34.586 8.35652 34.2011 8.7783L34.2222 14.2825C34.5807 14.6727 35.1026 14.9837 35.9673 14.9837C37.3381 14.9837 38.2555 13.4917 38.2555 11.4988C38.2555 9.56387 37.3223 8.04546 35.9673 8.04546ZM36.8267 18.2578C35.5297 18.2578 34.7389 17.7095 34.2064 17.3194L34.2011 21.4792L30.5 22.2647V5.00864H33.8742L33.9533 5.92601C34.4963 5.45151 35.4032 4.76612 36.853 4.76612C39.4523 4.76612 41.9039 7.107 41.9039 11.4197C41.8986 16.1226 39.4786 18.2578 36.8267 18.2578ZM48.3096 7.78712C47.3817 7.78712 46.3536 8.44088 46.3536 10.1122H50.1813C50.1813 8.44088 49.2165 7.78712 48.3096 7.78712ZM53.6346 12.8432H46.3853C46.5487 14.5778 47.8246 15.1366 49.2639 15.1366C50.7349 15.1366 51.9211 14.8098 52.9018 14.2825V17.2666C51.8948 17.9046 50.5662 18.2631 48.7947 18.2631C45.1885 18.2631 42.6578 16.0066 42.6578 11.5357C42.6578 7.76603 44.8036 4.77139 48.3255 4.77139C51.842 4.77139 53.6768 7.72385 53.6768 11.5146C53.6873 11.8678 53.6504 12.6429 53.6346 12.8432Z" fill="#0A2540"></path>
                </svg>
                <svg class="h-4 w-4 cursor-pointer text-gray-600 hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
           <div class="flex flex-col md:flex-row">
                <p class="text-sm font-sans text-gray-500">Join us online for Sessions,June 16-30,for product talks,demos and workshops.</p>
                <div class="flex flex-row cursor-pointer text-blue-600 hover:text-black items-center ml-1">
                    <p class="font-sans text-sm font-medium">Learn more</p>
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </div>
           </div>
        </div>
    </div>
    <div class="flex flex-col px-6 md:px-12 xl:px-6">
        <div class="flex flex-col space-y-2">
            <p class="font-sans font-bold text-3xl mt-8">Documentation</p>
            <p class="font-sans text-gray-600 text-2xl">Explore our guides and examples to integrate Stripe.</p>
        </div>
        <div class="flex flex-row border-b items-center justify-between mt-6">
            <div class="flex flex-col space-y-4 pr-5 pb-16 md:mb-4">
                <p class="font-sans font-bold text-2xl">Payments</p>
                <p class="font-sans text-gray-500 text-xl">Build a web or mobile integration to accept payments online or in person.</p>
                <button class="inline-flex justify-center items-center w-28 bg-blue-800 rounded px-2 py-1">
                    <span class="font-sans text-sm font-medium text-white whitespace-nowrap text-center">Get Started</span>
                    <svg class="h-6 w-6 ml-1 flex-shrink-0 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>
                <div class="hidden lg:flex flex-row space-x-2">
                    <p class="font-sans bg-gray-200 border px-2 cursor-pointer rounded text-xs">Online</p>
                    <p class="font-sans bg-gray-200 border px-2 cursor-pointer rounded text-xs">In person</p>
                    <p class="font-sans bg-gray-200 border px-2 cursor-pointer rounded text-xs">Subscriptions</p>
                    <p class="font-sans bg-gray-200 border px-2 cursor-pointer rounded text-xs">Marketplaces</p>
                </div>
            </div>
            <div class="hidden md:flex">
                <img class="max-w-lg" src="https://b.stripecdn.com/docs/assets/618a02ec341526208c1ce462d6e4e941.svg" alt="" >
            </div>
        </div>
        <div class="hidden md:flex flex-row justify-between mx-auto space-x-24 w-full h-full mt-6 relative">
           <StripeImageItem titleText={"Business operations"} titleDetailText={"Programmatically or manually monitor, protect, and report on the money you make with Stripe."} firstSectionItemText={"Prevent and handle disputes"} secondSectionItemText={"Generate reports"} imgSrc={"https://b.stripecdn.com/docs/assets/351f994957bbce29d4e0509e06d076d4.svg"} />
           <StripeImageItem titleText={"Financial services"} titleDetailText={"Move, control, and borrow money with Stripe's APIs and financial services."} firstSectionItemText={"Issue cards instantly"} secondSectionItemText={"Learn about the Stripe Corporate Card"} imgSrc={"https://b.stripecdn.com/docs/assets/b28276daa215c700dd56ddac319eed5f.svg"} />
            <div class="w-0.5 h-full bg-gray-200 absolute right-1/2"></div>
            <div class="w-0.5 h-16 bg-white absolute right-1/2"></div>
        </div>
        <div class="hidden md:flex flex-col mt-10 space-y-4">
            <p class="font-sans font-bold text-xl mt-8">Explore using Stripe</p>
            <div class="grid grid-cols-3 gap-8 pt-6">
                <StripeExploreItem type={"developer"} exploreItemTitle={"Developer Tools"} exploreItemDetailText={"Get up and running with libraries, keys, and integration tools."} />
                <StripeExploreItem type={"security"} exploreItemTitle={"Security"} exploreItemDetailText={"Strengthen your integration security and learn about sensitive data."} />
                <StripeExploreItem type={"account"} exploreItemTitle={"Account"} exploreItemDetailText={"Activate, manage, and configure your account."} />
            </div>
        </div>
    </div>
    <div class="flex flex-col mt-16 pb-24 px-6 md:px-12 xl:px-6">
        <p class="font-sans font-bold text-xl pt-8">Explore Stripe products </p>
        <div class="flex flex-col sm:flex-row mt-8">
            <div class="flex flex-col py-8 w-full sm:w-1/2 space-y-6">
                <div class="flex flex-col space-y-6">
                    <p class="font-sans font-semibold">Direct payments</p>
                    <StripeProductItem type={"payments"} productitemTitle={"Payments"} productitemDetail={"Online Payments"} />
                    <StripeProductItem type={"invoicing"} productitemTitle={"Invoicing"} productitemDetail={"One-off invoices"} />
                    <StripeProductItem type={"billing"} productitemTitle={"Billing"} productitemDetail={"Subscriptions and recurring payments"} />
                    <StripeProductItem type={"terminal"} productitemTitle={"Terminal"} productitemDetail={"In-person and omnichannel payments"} />
                </div>
                <div class="flex flex-col space-y-6">
                    <p class="font-sans font-semibold">Multiparty payments</p>
                    <StripeProductItem type={"connect"} productitemTitle={"Connect"} productitemDetail={"Payments for platforms and marketplaces"} />
                </div>
                <div class="flex flex-col space-y-6">
                    <p class="font-sans font-semibold">Prebuilt components</p>
                    <StripeProductItem type={"checkout"} productitemTitle={"Checkout"} productitemDetail={"Prebuilt, Stripe hosted checkout page"} />
                    <StripeProductItem type={"elements"} productitemTitle={"Elements"} productitemDetail={"Secure frontend UI components"} />
                </div>
            </div>
            <div class="flex flex-col py-8 px-0 sm:px-12 w-full sm:w-1/2 bg-white md:bg-gray-100 rounded space-y-6">
                <div class="flex flex-col space-y-6">
                    <p class="font-sans font-semibold">Business operations</p>
                    <StripeProductItem type={"radar"} productitemTitle={"Radar"} productitemDetail={"Fraud and risk management"} />
                    <StripeProductItem type={"sigma"} productitemTitle={"Sigma"} productitemDetail={"Custom reports"} />
                    <StripeProductItem type={"climate"} productitemTitle={"Climate"} productitemDetail={"Remove carbon as you grow your business"} />
                    <StripeProductItem type={"atlas"} productitemTitle={"Atlas"} productitemDetail={"Startup incorporation"} />
                    <StripeProductItem type={"identity"} productitemTitle={"Identity"} productitemDetail={"Identity verification"} />
                </div>
                <div class="flex flex-col space-y-6">
                    <p class="font-sans font-semibold">Financial services</p>
                    <StripeProductItem type={"issuing"} productitemTitle={"Issuing"} productitemDetail={"Card creation"} />
                    <StripeProductItem type={"corporate"} productitemTitle={"Corporate card"} productitemDetail={"Spend management"} />
                    <StripeProductItem type={"capital"} productitemTitle={"Capital"} productitemDetail={"Business financing"} />
                </div>
            </div>   
        </div>
    </div>
    <div class="flex flex-col sm:flex-row border-t py-6 px-6 md:px-12 xl:px-6">
        <div class="flex flex-col w-full sm:w-1/2 space-y-3">
            <div class="flex flex-row space-x-3 items-center">
                <svg class="w-4 h-4 text-gray-600 fill-current" aria-hidden="true" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.756-13.908l-1.283 1.561C9.743 3.238 8.9 3 8 3s-1.744.238-2.473.653L4.244 2.092a7.037 7.037 0 0 0-2.152 2.152l1.561 1.283C3.238 6.257 3 7.1 3 8s.238 1.744.653 2.473l-1.561 1.283a7.037 7.037 0 0 0 2.152 2.152l1.283-1.561C6.257 12.762 7.1 13 8 13s1.744-.238 2.473-.653l1.283 1.561a7.037 7.037 0 0 0 2.152-2.152l-1.561-1.283C12.762 9.743 13 8.9 13 8s-.238-1.744-.653-2.473l1.561-1.283a7.037 7.037 0 0 0-2.152-2.152zM8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0-1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                </svg>
                <div class="flex flex-row space-x-1">
                    <p class="font-sans font-medium text-sm text-gray-800">Questions</p>
                    <p class="font-sans text-sm text-blue-600 font-medium hover:text-black whitespace-nowrap cursor-pointer">Contact Us</p>
                </div>
            </div>
            <div class="flex flex-row space-x-3 items-center">
                <svg class="w-4 h-4 text-gray-600 fill-current" aria-hidden="true" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm11 4l2.18-1.883a.5.5 0 0 1 .82.385v7.002a.5.5 0 0 1-.82.385L13 10z" fill-rule="evenodd" class="st-current"></path>
                </svg>
                <div class="flex flex-row space-x-1">
                    <p class="font-sans font-medium text-sm text-gray-800">Developer tutorials on</p>
                    <p class="font-sans text-sm text-blue-600 font-medium hover:text-black whitespace-nowrap cursor-pointer">Youtube</p>
                </div>
            </div>
            <div class="flex lg:hidden flex-row space-x-3">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path fill="#E25950" fill-rule="nonzero" d="M14 14H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z"></path><path fill="#F6F9FC" fill-rule="nonzero" d="M0 11h16v1H0v-1zm14 3H2a2 2 0 0 1-1.732-1h15.464A2 2 0 0 1 14 14zM0 9h16v1H0V9zm8-2h8v1H8V7zm0-2h8v1H8V5zm0-2h7.723c.171.295.277.634.277 1H8V3z"></path><path fill="#E25950" fill-rule="nonzero" d="M14 14H2a2 2 0 0 1-2-2V8h1v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8V2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z" opacity=".1"></path><path fill="#43458B" fill-rule="nonzero" d="M0 8V3.714C0 2.768.796 2 1.778 2H8v6H0z"></path>
                    <path fill="#FFF" fill-rule="nonzero" d="M7.026 5.501a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM5.518 5a.5.5 0 1 1-.038-1 .5.5 0 0 1 .038 1zm-.492.501a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM3.518 5a.5.5 0 1 1-.038-1 .5.5 0 0 1 .038 1zm-.492.501a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm4-2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.507 1.5a.5.5 0 1 1-.038-.999.5.5 0 0 1 .038 1zm.014 1A.5.5 0 1 1 1.57 7a.5.5 0 0 1-.037-1zm2 0A.5.5 0 1 1 3.57 7a.5.5 0 0 1-.037-1zm2 0A.5.5 0 1 1 5.57 7a.5.5 0 0 1-.037-1z"></path><path fill="#FFF" d="M6.533 7a.5.5 0 1 1 .037 1 .5.5 0 0 1-.037-1zm-2 0a.5.5 0 1 1 .037 1 .5.5 0 0 1-.037-1zm-2 0a.5.5 0 1 1 .037 1 .5.5 0 0 1-.037-1zM.482 7a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1zm0-2a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1zm0-2a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1zm1-1a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1zm2 0a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1zm2 0a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1zm2 0a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1zm0 2a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1zm0 2a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1z" opacity=".5"></path></g>
                </svg>
                <svg class="w-4 h-4 text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="2 2 16 16" aria-hidden="true" height="16" width="16">
                    <path d="M11.6 13.1l-2 2.5c-.3.3-.7.3-.9 0-.1-.1-.2-.3-.2-.5v-2c-2.5-.5-4-2.3-4-4.4 0-2.5 2.1-4.5 5.5-4.5s5.5 2 5.5 4.5c-.1 2.3-1.7 4.1-3.9 4.4z"></path>
                </svg>    
            </div>
        </div>
        <div class="flex flex-col w-full sm:w-1/2 space-y-2 mt-6">
            <p class="font-sans text-sm text-gray-900 font-medium">Sign up for developer updates:</p>
            <div class="inline-flex items-center rounded border w-full">
                <input class="w-full focus:outline-none px-4"> 
                <button disabled={true} class="px-4 py-1 whitespace-nowrap font-sans font-medium text-gray-400">Sign Up</button>
            </div>
            <p class="font-sans text-xs">You can unsubscribe at any time. Read our<span class="cursor-pointer ml-1 text-blue-500 hover:text-black">privacy policy</span></p>
        </div>
    </div>
</div>
<div class="hidden lg:flex flex-col space-y-3 fixed left-6 bottom-4">
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path fill="#E25950" fill-rule="nonzero" d="M14 14H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z"></path><path fill="#F6F9FC" fill-rule="nonzero" d="M0 11h16v1H0v-1zm14 3H2a2 2 0 0 1-1.732-1h15.464A2 2 0 0 1 14 14zM0 9h16v1H0V9zm8-2h8v1H8V7zm0-2h8v1H8V5zm0-2h7.723c.171.295.277.634.277 1H8V3z"></path><path fill="#E25950" fill-rule="nonzero" d="M14 14H2a2 2 0 0 1-2-2V8h1v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8V2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z" opacity=".1"></path><path fill="#43458B" fill-rule="nonzero" d="M0 8V3.714C0 2.768.796 2 1.778 2H8v6H0z"></path>
        <path fill="#FFF" fill-rule="nonzero" d="M7.026 5.501a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM5.518 5a.5.5 0 1 1-.038-1 .5.5 0 0 1 .038 1zm-.492.501a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM3.518 5a.5.5 0 1 1-.038-1 .5.5 0 0 1 .038 1zm-.492.501a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm4-2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.507 1.5a.5.5 0 1 1-.038-.999.5.5 0 0 1 .038 1zm.014 1A.5.5 0 1 1 1.57 7a.5.5 0 0 1-.037-1zm2 0A.5.5 0 1 1 3.57 7a.5.5 0 0 1-.037-1zm2 0A.5.5 0 1 1 5.57 7a.5.5 0 0 1-.037-1z"></path><path fill="#FFF" d="M6.533 7a.5.5 0 1 1 .037 1 .5.5 0 0 1-.037-1zm-2 0a.5.5 0 1 1 .037 1 .5.5 0 0 1-.037-1zm-2 0a.5.5 0 1 1 .037 1 .5.5 0 0 1-.037-1zM.482 7a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1zm0-2a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1zm0-2a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1zm1-1a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1zm2 0a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1zm2 0a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1zm2 0a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1zm0 2a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1zm0 2a.5.5 0 1 1 .036 1 .5.5 0 0 1-.036-1z" opacity=".5"></path></g>
    </svg>
    <svg class="w-4 h-4 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="2 2 16 16" aria-hidden="true" height="16" width="16">
        <path d="M11.6 13.1l-2 2.5c-.3.3-.7.3-.9 0-.1-.1-.2-.3-.2-.5v-2c-2.5-.5-4-2.3-4-4.4 0-2.5 2.1-4.5 5.5-4.5s5.5 2 5.5 4.5c-.1 2.3-1.7 4.1-3.9 4.4z"></path>
    </svg>    
</div>