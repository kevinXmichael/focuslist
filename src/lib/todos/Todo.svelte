<script>
  import Fa from "svelte-fa"
  import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
  import { hoursLeft } from "@/lib/date-time"
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

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
  class="flex flex-row flex-nowrap mb-sm w-full items-center justify-center"
  on:mouseover={() => updateHoveredRow(index)}
  on:mouseleave={() => updateHoveredRow(-1)}
>
  <input class="input--std" value={todo.title} />
  <h2>hours {hoursLeft(todo.created)}</h2>
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
