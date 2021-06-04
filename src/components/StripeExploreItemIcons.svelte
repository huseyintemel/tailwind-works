<script>
    export let type = null;
</script>
{#if type == "developer"}
    <svg class="w-8 h-8 text-indigo-400 fill-current" aria-hidden="true" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.128 0h5.744c1.783 0 2.43.186 3.082.534.652.349 1.163.86 1.512 1.512S16 3.345 16 5.128v5.744c0 1.783-.186 2.43-.534 3.082a3.635 3.635 0 0 1-1.512 1.512c-.652.348-1.299.534-3.082.534H5.128c-1.783 0-2.43-.186-3.082-.534s-1.163-.86-1.512-1.512C.186 13.302 0 12.655 0 10.872V5.128c0-1.783.186-2.43.534-3.082A3.635 3.635 0 0 1 2.046.534C2.698.186 3.345 0 5.128 0zM9 11a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2zM8 8.997a.997.997 0 0 0-.357-.768L4.702 5.288a1 1 0 0 0-1.414 1.414l2.295 2.295-2.295 2.296a1 1 0 0 0 1.414 1.414l2.941-2.941c.022-.019.044-.038.064-.059A.997.997 0 0 0 8 8.997z" fill-rule="evenodd"></path>
    </svg>
{:else if type == "security"}
    <svg class="w-8 h-8 text-indigo-400 fill-current" aria-hidden="true" height="32" width="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7V5a5 5 0 1 1 10 0v2h.5a1 1 0 0 1 1 1v6a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1zm5 2.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM11 7V5a3 3 0 1 0-6 0v2z" fill-rule="evenodd"></path>
    </svg>
{:else if type == "account"}
    <svg class="w-8 h-8  text-indigo-400 fill-current" aria-hidden="true" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 11a5.698 5.698 0 0 0 3.9-1.537l1.76.66A3.608 3.608 0 0 1 16 13.5V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-1.5c0-1.504.933-2.85 2.34-3.378l1.76-.66A5.698 5.698 0 0 0 8 11zM7.804 0h.392a3.5 3.5 0 0 1 3.488 3.79l-.164 1.971a3.532 3.532 0 0 1-7.04 0l-.164-1.97A3.5 3.5 0 0 1 7.804 0z" fill-rule="evenodd"></path>
    </svg>
{/if}    

