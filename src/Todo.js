import React from 'react'
import { ACTIONS } from './App'
import './App.css'

function Todo(props) {
    return (
      <div className="todo">
        <input className="checkbox" type="checkbox" checked={props.todo.complete} onClick={() => props.dispatch( { type: ACTIONS.COMPLETE_TODO, payload: {id: props.todo.id} })} />
        <span className="name" style={ { textDecoration:(props.todo.complete) ? 'line-through' : 'auto' } }>  {props.todo.name}</span>
        <button className="deleteTodo" 
                type="button" 
                onClick={() => props.dispatch( { type: ACTIONS.DELETE_TODO, payload: {id: props.todo.id} })}></button>
      </div>
    )
}

export default Todo;