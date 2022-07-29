import { useState } from 'react'

const Input = (props) => { 
  return (
    <input type="text" placeholder={props.searchTerm} className="Todo__input"/>
  )
}

const TodoSearch = (props) => { 
  return (
    <form>
     {props.children}
    </form>
  )
}

const TodoCounter = (props) => { 
  return (
    <section>
      {props.children}
    </section>
  )
}

const TodoItem = (props) => { 
  return (
    <li>{props.value}</li>
  )
}

const TodoList = (props) => {
  return (
    <ul>
      {props.children}
    </ul>
  )
}

const GoodExample = () => {
  const [searchTerm, setSearchTerm] = useState('Buscar Tarea');
  const [addPlaceholder, setAddPalceholder] = useState('Añadir Tarea');
  const [todos, setTodos] = useState(["Learn React", "Learn ES6", "Learn TypeScript"]);

  return (
    <section className='Todo'>
      <TodoSearch>
        <h1 className='Todo__title'>Counter</h1>
        <Input searchTerm={searchTerm}/>
      </TodoSearch>
      <TodoList>
        {todos.map((todo, index) => { 
          return (
            <TodoItem key={index} value={todo} />
          )
        })}
      </TodoList>
      <TodoCounter>
        <Input searchTerm={addPlaceholder} />
        <button className='Todo__button'>Añadir</button>
      </TodoCounter>
    </section>  
  )  
}

export default GoodExample;