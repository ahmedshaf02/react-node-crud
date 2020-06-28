

const initState={
  employee:[]
}

export default (state=initState,{type,payload})=>{

  switch(type){

    case "UPDATE":
      console.log(payload)
      return{
        employee:payload
      };

    case "UPDATE_NEW":
      return{
        employee:[...state.employee,payload]
      }

    case "UPDATE_EMPLOYEE":
      return{
        employee:state.employee.map(ele=>ele._id=== payload._id?payload:ele)
      }

    case "DELETE":
      return{
        employee:state.employee.filter(ele=>ele._id !== payload._id)
      }

    default:
      return state
  }
}