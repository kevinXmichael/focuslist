<script>
  import "@/styles/app.scss"
  import "@/i18n"
  import { _, isLoading } from "svelte-i18n"
  import boot from "@/lib/boot"
  import Todos from "@/lib/todos/Todos.svelte"
</script>

{#await boot() then result}
  {#if !$isLoading}
    <main
      class="p-md m-auto w-full h-full flex flex-col items-center justify-center"
    >
      <h1>{$_("title")}</h1>
      <Todos />
    </main>
  {/if}
{/await}
