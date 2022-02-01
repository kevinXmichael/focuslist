<script>
  import "@/styles/app.scss"

  import Fa from "svelte-fa"
  import { faPlusSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
</script>

<main
  class="p-sm m-auto w-full h-full flex flex-col items-center justify-center"
>
  <h1>FocusList</h1>
  <div class="text-white">
    <Fa icon={faPlusSquare} class="std-hover" size="sm" /> Add
    <Fa icon={faTrashAlt} size="lg" /> Remove
  </div>
</main>
