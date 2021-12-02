import { ADDTODO, DELETETODO, DONETODO, EDITTODO } from "./types"




export const addtodo=(newtodo)=>{
    return {
          type:ADDTODO,
          payload:newtodo
    }
}

export const deletetodo= (id )=>{

    return {
        type: DELETETODO,
        payload: id
    }
}

export const donetodo=(id)=>{

    return {
        type: DONETODO,
        payload: id
    }
}

export const edittodo=(id,newtask)=>{
    return {

        type: EDITTODO,

        id:id,
        newtask:newtask
    }
}
