import { useState } from "react"
import { useDispatch } from "react-redux"
import { addtodo } from "../redux/actions"


const Add =()=>{

const [text,setText]= useState('')
const dispatch= useDispatch()

    return (
        <div>
            <input    value={text}   onChange={(e)=>setText(e.target.value)}    ></input>
            <button    onClick={()=>{dispatch(addtodo({id:Math.random(),   task:text ,  done:false    })); setText("")  }}     >add</button>
        </div>
    )
}
export default Add