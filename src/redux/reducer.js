import { ADDTODO, DELETETODO, DONETODO, EDITTODO } from "./types"

const intialState={


    todos: [{id:0, task:"eat", done:false},{id:1, task:"sleep", done:false},{id:2, task:"repeat", done:false}]

}

const Reducer=(state=intialState, action)=>{

switch (action.type) {
  
    case ADDTODO: 
    return {...state,  todos: [...state.todos,  action.payload  ]  }

    case DELETETODO:
        return { ...state, todos:    state.todos.filter(el=>  el.id !== action.payload  )     }

        case DONETODO: 
        return {...state,
             todos:   state.todos.map(el=> el.id===action.payload ?  {...el,  done: !el.done } : el  )  }


             case EDITTODO :
            return      {...state, todos:   
                 state.todos.map(el=>  el.id ==action.id ? {...el,  task:action.newtask  }  : el  )       }

    default:
     return state
}
}
export default Reducer