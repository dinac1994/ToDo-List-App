import { useState, useReducer } from 'react'
import Todo from './Todo'
import './App.css'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  COMPLETE_TODO: 'complete-todo',
  DELETE_TODO: 'delete-todo',
  DELETE_ALL_COMPLETED: 'delete-completed-todos'
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.COMPLETE_TODO:
      return (
        todos.map(todo => (todo.id === action.payload.id) ? {...todo, complete: !todo.complete} : todo)
      )
    case ACTIONS.DELETE_TODO:
      return (
        todos.filter(todo => (todo.id !== action.payload.id))
      )
    case ACTIONS.DELETE_ALL_COMPLETED:
      return (
        todos.filter(todo => todo.complete === false)
      )
    default:
      return todos
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }

  return (
    <div className="app">
      <div className="container">
        <p className="heading">ToDo List App</p>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" className="input" placeholder="What do I need to do?"value={name} onChange={e => setName(e.target.value)} />
          <button type="button" className="deleteCompleted" onClick={() => dispatch( { type: ACTIONS.DELETE_ALL_COMPLETED })}>Delete completed!</button>
        </form>
        {todos.map(todo => <Todo todo={todo} dispatch={dispatch} />)}
      </div>
    </div>
  )
}

export default App;