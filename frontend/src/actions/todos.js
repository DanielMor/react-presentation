let nextTodoId = 0;

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    todo: {
      id: nextTodoId++,
      completed: false,
      text,
    }
  }
}

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id,
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  }
}

export const updateTodo = (id, text) => {
  return {
    type: 'UPDATE_TODO',
    id,
    text,
  }
}