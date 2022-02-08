<script>
  import Fa from "svelte-fa"
  import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
  import { hoursLeftActive, hoursLeftArchived } from "@/lib/date-time"
  import {
    deleteTodo,
    iconClass,
    iconStyle,
    hoveredRow,
    updateHoveredRow
  } from "@/lib/todos"

  export let archived = false
  export let index = -1
  export let todo = {}

  function hoveredRowName(index = -1) {
    return `${index}-${archived}`
  }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
  class="flex flex-row flex-nowrap mb-sm w-full items-center justify-center"
  style="position: relative;"
  on:mouseover={() => updateHoveredRow(hoveredRowName(index))}
  on:mouseleave={() => updateHoveredRow(hoveredRowName())}
>
  <input class="input--std" value={todo.title} />
  <div class="flex flex-row flex-nowrap">
    <div on:click={(event) => deleteTodo(index)} class={iconClass}>
      {#if hoveredRowName(index) === $hoveredRow}
        <Fa icon={faTrashAlt} style={iconStyle} />
      {:else}
        <div style={iconStyle} />
      {/if}
    </div>
  </div>
  <div class="text-no-select" style="position: absolute; right: 2.75rem;">
    {#if hoveredRowName(index) === $hoveredRow}
      {archived
        ? hoursLeftArchived(todo.created)
        : hoursLeftActive(todo.created)}h
    {/if}
  </div>
</div>
