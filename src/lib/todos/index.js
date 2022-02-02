import { get, writable } from "svelte/store"

export const MAX_TODOS = 5

export const todos = writable(JSON.parse(localStorage.getItem("todos")) ?? [])

export function safeTodos() {
  localStorage.setItem("todos", JSON.stringify(get(todos)))
}

export function addTodo(todo) {
  if (get(todos).length < MAX_TODOS) {
    todos.update((todos) => {
      return [...todos, todo]
    })
  } else {
    console.error("❌ Cannot add anymore todos, reached maximum.")
  }
}

export function deleteTodo(index) {
  todos.update((todos) => {
    return todos.filter((todo, index_) => index !== index_)
  })
}
