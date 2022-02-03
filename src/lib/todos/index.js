import { get, writable } from "svelte/store"

export const iconClass =
  "flex flex-col items-center justify-center std-hover text-white ml-sm"
export const iconStyle = "width: 1.5rem; height: 1.5rem;"

export const hoveredRow = writable(-1)
export const MAX_TODOS = 5
export const todos = writable(JSON.parse(localStorage.getItem("todos")) ?? [])

export function updateHoveredRow(newIndex = -1) {
  hoveredRow.set(newIndex)
}

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
  try {
    todos.update((todos) => {
      return todos.filter((todo, index_) => index !== index_)
    })
    return safeTodos()
  } catch (err) {
    console.error(`❌ Cannot delete todos, error was: ${err}`)
    return false
  }
}
