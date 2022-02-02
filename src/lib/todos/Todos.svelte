<script>
  import { MAX_TODOS, todos, addTodo, deleteTodo, safeTodos } from "@/lib/todos"
  import Fa from "svelte-fa"
  import { faPlusSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons"

  $: activeTodos = $todos // TODO: FILTER BY DATE one day ago, others push to archived?
  $: archivedTodos = [...$todos] // TODO: FILTER BY DATE
  let newTodoTitle = ""

  function addNewTodo() {
    addTodo({ title: newTodoTitle })
    newTodoTitle = ""
  }
</script>

<div class="flex flex-col h-full w-full">
  {#each activeTodos as todo, i}
    <div class="flex flex-row flex-nowrap mb-sm h-full w-full">
      <!-- TODO: HOW TO BIND/SAFE NEW TODOS? -->
      <input value={todo.title} />
      <div class="spacer" />
      <div class="flex flex-row flex-nowrap ml-sm">
        <div on:click={(event) => deleteTodo(i)} class="std-hover text-white">
          <Fa icon={faTrashAlt} size="lg" /> Remove
        </div>
      </div>
    </div>
  {/each}
  <div class="flex flex-row flex-nowrap w-full">
    <input bind:value={newTodoTitle} />
    <div on:click={addNewTodo} class="std-hover text-white">
      <Fa icon={faPlusSquare} size="sm" /> Add
    </div>
  </div>
</div>
