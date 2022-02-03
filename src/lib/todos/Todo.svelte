<script>
  import Fa from "svelte-fa"
  import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
  import {
    deleteTodo,
    iconClass,
    iconStyle,
    hoveredRow,
    updateHoveredRow
  } from "@/lib/todos"

  export let todo = {}
  export let index = -1
</script>

<div
  class="flex flex-row flex-nowrap mb-sm w-full items-center justify-center"
  on:mouseover={() => updateHoveredRow(index)}
  on:mouseleave={() => updateHoveredRow(-1)}
>
  <input class="input--std" value={todo.title} />
  <div class="flex flex-row flex-nowrap">
    <div on:click={(event) => deleteTodo(index)} class={iconClass}>
      {#if index === $hoveredRow}
        <Fa icon={faTrashAlt} style={iconStyle} />
      {:else}
        <div style={iconStyle} />
      {/if}
    </div>
  </div>
</div>
