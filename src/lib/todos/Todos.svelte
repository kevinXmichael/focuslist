<script>
  import { todos, addTodo, deleteTodo, safeTodos } from "@/lib/todos"
  import Fa from "svelte-fa"
  import { faPlusSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
</script>

<h1>Hallo Todos</h1>
{#each $todos as todo, i}
  <div class="flex flex-row flex-nowrap mb-sm h-full w-full">
    <input value={todo.title} />
    <div class="spacer" />
    <div class="flex flex-row flex-nowrap ml-sm">
      <div on:click={(event) => addTodo(todo)} class="std-hover text-white">
        <Fa icon={faPlusSquare} size="sm" /> Add
      </div>
      <div on:click={(event) => deleteTodo(i)} class="std-hover text-white">
        <Fa icon={faTrashAlt} size="lg" /> Remove
      </div>
      <div on:click={safeTodos} class="std-hover text-white">Safe</div>
    </div>
  </div>
{/each}
