

const initState={
  employee:[]
}

export default (state=initState,{type,payload})=>{

  switch(type){

    case "UPDATE":
      return{
        employee:[...state.employee,payload]
      }

    default:
      return state
  }
}