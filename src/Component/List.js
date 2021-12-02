import { useState } from "react"
import { useSelector } from "react-redux"
import Task from "./Task"

const List =()=>{


    const todos= useSelector(state=> state.todos)

    const [filterDone, setFilterDone] =useState(false)
    const [filter, setFilter] =useState(false)
    return (
        <div>
            <button  onClick={()=> setFilter(false)}   >all</button>
            <button    onClick={()=>{   setFilterDone(true);  setFilter(true)  }}   >done</button>
            <button    onClick={()=>{setFilterDone(false);  setFilter(true) }}    >undone</button>
            {
            filterDone  && filter ? todos.filter(el=>el.done).map( todo  =>    <Task   todo={todo}   key={todo.id}  ></Task>  ):
            ! filterDone  && filter ? todos.filter(el=>!el.done).map( todo  =>    <Task   todo={todo}   key={todo.id}  ></Task>  ):
            
            ! filter ?  todos.map( todo  =>    <Task   todo={todo}   key={todo.id}  ></Task>  )
        
        : null}
        </div>
    )
}

export default List