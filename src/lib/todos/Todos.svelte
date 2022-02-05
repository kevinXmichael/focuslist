<script>
  import { MAX_TODOS, todos, addTodo, iconClass, iconStyle } from "@/lib/todos"
  import { isOlderThan1Day } from "@/lib/date-time"
  import Todo from "@/lib/todos/Todo.svelte"
  import Fa from "svelte-fa"
  import { faPlusSquare } from "@fortawesome/free-solid-svg-icons"
  import { _ } from "svelte-i18n"

  $: activeTodos = $todos.filter((todo) => !isOlderThan1Day(todo.created))
  $: archivedTodos = $todos.filter((todo) => isOlderThan1Day(todo.created))

  let newTodoTitle = ""
  function addNewTodo() {
    if (addTodo(newTodoTitle)) {
      // reset for next todo
      newTodoTitle = ""
    }
  }

  function isEnter(event = false) {
    return event?.keyCode === 13
  }
</script>

<div class="flex flex-col h-full w-full">
  {#each activeTodos as todo, index}
    <Todo {todo} {index} />
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
  {#if archivedTodos?.length > 0}
    <div class="spacer" />
    <h2 class="my-md">{$_("todos.archived")}</h2>
    {#each archivedTodos as todo, index}
      <Todo {todo} {index} archived={true} />
    {/each}
  {/if}
</div>
