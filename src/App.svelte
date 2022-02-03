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
      class="p-sm m-auto flex flex-col justify-center"
      style="height: 99vh; width: 99vw;"
    >
      <h1 class="mb-md p-sm">{$_("title")}</h1>
      <Todos />
    </main>
  {/if}
{/await}
