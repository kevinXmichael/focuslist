import { get, writable } from "svelte/store"

export const todos = writable(
  JSON.parse(localStorage.getItem("todos")) ?? [{ title: "test" }]
)

export function safeTodos() {
  localStorage.setItem("todos", JSON.stringify(get(todos)))
}

export function addTodo(todo) {
  todos.update((todos) => {
    return [...todos, todo]
  })
}

export function deleteTodo(index) {
  todos.update((todos) => {
    return todos.filter((todo, index_) => index !== index_)
  })
}
