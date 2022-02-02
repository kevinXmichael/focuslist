import { get, writable } from "svelte/store"

export const MAX_TODOS = 5

export const todos = writable(JSON.parse(localStorage.getItem("todos")) ?? [])

export function safeTodos() {
  try {
    localStorage.setItem("todos", JSON.stringify(get(todos)))
    return true
  } catch (err) {
    console.error(`❌ Cannot safe todos, error was: ${err}`)
  }
}

export function addTodo(title = "") {
  if (get(todos).length < MAX_TODOS) {
    todos.update((todos) => {
      return [...todos, { title, created: new Date() }]
    })
    return safeTodos()
  } else {
    console.error("❌ Cannot add anymore todos, reached maximum.")
    return false
  }
}

export function deleteTodo(index) {
  todos.update((todos) => {
    return todos.filter((todo, index_) => index !== index_)
  })
}
