import { useState } from 'react'

const Input = (props) => { 
  return (
    <input type="text" placeholder={props.searchTerm} className="Todo__input" />
  )
}

const TodoSearch = (props) => { 
  return (
    <Input searchTerm={props.searchTerm} className="Todo__input"/>
  )
}

const TodoCounter = () => { 
  return (
    <h1 className='Todo__title'>Counter</h1>
  )
}

const TodoItem = (props) => { 
  return (
    <ul>
      <li>{props.value}</li>
    </ul>
  )
}

const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem key={index} value={todo} />
        )
      })}
    </div>
  )
}

const BadExample = () => {
  const [searchTerm, setSearchTerm] = useState('Buscar Todo');
  const [todos, setTodos] = useState(["Learn React", "Learn ES6", "Learn TypeScript"]);
  return (
    <section className='Todo'>
      <TodoCounter />
      <TodoSearch searchTerm={searchTerm} />
      <TodoList todos={todos} />
      <TodoSearch searchTerm={"Añadir Tarea"} />
      <button className='Todo__button'>Añadir</button>
    </section>  
  )  
}

export default BadExample;