<script>
    import { goto } from '@sapper/app';
</script>
<div class="flex flex-col items-center mt-10 mb-20">

    <svg class=" w-12 h-12 text-gray-700 fill-current" viewBox="0 0 16 16" ><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>

    <h1 class="font-sans text-2xl font-thin mt-4 text-gray-700">Sign in to GitHub</h1>

    <div class="flex flex-col rounded-md max-w-md p-5 border mt-4 bg-gray-200">
        <p class="font-sans  text-sm font-semibold">Username or email address</p>
        <input class="mt-2 w-64 rounded-md h-8 border bg-white">
        <div class="flex flex-row justify-between mt-4">
            <p class="font-sans text-sm font-semibold">Password</p>
            <p on:click={()=>goto("https://github.com/password_reset")} class="font-sans text-xs font-semibold cursor-pointer text-blue-600"> Forgot password?</p>
           
        </div>  
        <input class="mt-2 w-64 rounded-md h-8 border bg-white">
        <button class="mt-5 w-64 rounded-md h-8 border hover:bg-green-600 bg-green-500 font-sans font-medium text-sm text-white">Sign in </button>
    </div>

    <div class="flex flex-row rounded-md max-w-md px-10 py-4 border mt-4 bg-white space-x-1">
        <p class="font-sans text-sm">New to GitHub?</p>
        <p on:click={()=>goto("https://github.com/join?source=login")} class="font-sans text-blue-600 text-sm hover:underline cursor-pointer">Create an account.</p>
    </div>   
    <div class="flex flex-row space-x-4 mt-20">
        <p on:click={()=>goto("https://docs.github.com/en/github/site-policy/github-terms-of-service")} class="font-sans text-xs text-blue-500 hover:underline cursor-pointer">Terms</p>
        <p on:click={()=>goto("https://docs.github.com/en/github/site-policy/github-privacy-statement")} class="font-sans text-xs text-blue-500 hover:underline cursor-pointer">Privacy</p>
        <p on:click={()=>goto("https://github.com/security")} class="font-sans text-xs text-blue-500 hover:underline cursor-pointer" >Privacy</p>
        <p on:click={()=>goto("https://support.github.com/request")} class="font-sans text-xs text-gray-600 hover:underline hover:text-blue-500 cursor-pointer">Contact Github</p>
    </div> 
</div>