import { useDispatch } from "react-redux"
import { deletetodo, donetodo } from "../redux/actions"
import Edit from "./Edit"


const Task =({todo})=>{
    const dispatch= useDispatch()

    console.log(todo.id)
    return (
        <div>

<ul>
                <li   style={{ textDecoration: todo.done && "line-through"    }}   >{todo.task}</li>
                <button  onClick={()=> dispatch(deletetodo(todo.id) )  }  >delete</button>
                <button   onClick={()=>dispatch(donetodo(todo.id))}   >   {todo.done ? "undone"  : "done" }   </button>
                 <Edit  todo={todo}   ></Edit>
            </ul> 
        </div>
    )
}
export default Task