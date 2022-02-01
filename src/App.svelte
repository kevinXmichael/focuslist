<script>
  import "@/styles/app.scss"
  import "@/i18n"

  import Fa from "svelte-fa"
  import { faPlusSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons"

  import { _, isLoading } from "svelte-i18n"
</script>

{#if !$isLoading}
  <main
    class="p-sm m-auto w-full h-full flex flex-col items-center justify-center"
  >
    <h1>{$_("title")}</h1>

    <div class="text-white">
      <Fa icon={faPlusSquare} class="std-hover" size="sm" /> Add
      <Fa icon={faTrashAlt} size="lg" /> Remove
    </div>
  </main>
{/if}
