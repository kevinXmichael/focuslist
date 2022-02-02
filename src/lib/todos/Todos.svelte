<script>
  import { MAX_TODOS, todos, addTodo, deleteTodo, safeTodos } from "@/lib/todos"
  import Fa from "svelte-fa"
  import { faPlusSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
  import { _ } from "svelte-i18n"
  import { isOlderThan1Day } from "@/lib/date-time"

  $: activeTodos = $todos.filter((todo) => isOlderThan1Day(todo.created))
  $: archivedTodos = $todos.filter((todo) => !isOlderThan1Day(todo.created))

  const iconClass =
    "flex flex-col items-center justify-center std-hover text-white ml-sm"
  const iconStyle = "width: 1.5rem; height: 1.5rem;"
  let newTodoTitle = ""
  let hoveredRow = -1

  function addNewTodo() {
    if (addTodo(newTodoTitle)) {
      newTodoTitle = ""
    }
  }

  function isEnter(event = false) {
    return event?.keyCode === 13
  }

  function updateHoveredRow(index = -1) {
    hoveredRow = index
  }
</script>

<div class="flex flex-col h-full w-full">
  {#each activeTodos as todo, index}
    <div
      class="flex flex-row flex-nowrap mb-sm h-full w-full items-center justify-center"
      on:mouseover={() => updateHoveredRow(index)}
      on:mouseleave={() => updateHoveredRow(-1)}
    >
      <input class="input--std" value={todo.title} />
      <div class="flex flex-row flex-nowrap">
        <div on:click={(event) => deleteTodo(index)} class={iconClass}>
          {#if index === hoveredRow}
            <Fa icon={faTrashAlt} style={iconStyle} />
          {:else}
            <div style={iconStyle} />
          {/if}
        </div>
      </div>
    </div>
  {/each}
  {#if activeTodos.length < MAX_TODOS}
    <div class="flex flex-row flex-nowrap w-full">
      <input
        class="input--active"
        bind:value={newTodoTitle}
        on:keypress={(event) => {
          if (isEnter(event)) addNewTodo()
        }}
        placeholder={`${$_("todos.placeholder")}`}
      />
      <div on:click={addNewTodo} class={iconClass}>
        <Fa icon={faPlusSquare} style={iconStyle} />
      </div>
    </div>
  {/if}
  <div class="spacer" />
  <h2 class="my-md">{$_("todos.archived")}</h2>
  {#each archivedTodos as todo, index}
    <div
      class="flex flex-row flex-nowrap mb-sm h-full w-full items-center justify-center"
      on:mouseover={() => updateHoveredRow(index)}
      on:mouseleave={() => updateHoveredRow(-1)}
    >
      <input class="input--std" value={todo.title} />
      <div class="flex flex-row flex-nowrap">
        <div on:click={(event) => deleteTodo(index)} class={iconClass}>
          {#if index === hoveredRow}
            <Fa icon={faTrashAlt} style={iconStyle} />
          {:else}
            <div style={iconStyle} />
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>
