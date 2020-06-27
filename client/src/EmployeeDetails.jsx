
import React, { useEffect, useState } from "react"
import EmployeeForm from "./EmployeeForm"
import {useDispatch,useSelector} from "react-redux"
import "./styles.css"

const EmployeeDetails =()=>{
  
  const [data,setData] = useState([])
  const dispatch = useDispatch()
  const state = useSelector(state=>state)
  const [form,setForm] = useState(false)
  const [edit,setEdit] =  useState({})
  
  // console.log(state)

    useEffect(()=>{

      fetch("https://kmogu.sse.codesandbox.io/allemployee",{
        method:"get",
        headers:{
          "Content-Type":"application/json"
        }
      }).then(data=>data.json())
      .then(data=>{
        console.log(data.employee)
        dispatch({type:"UPDATE",payload:data.employee})
      })
      .catch(err=>console.log(err))
      
      return (()=>{
        return
      })
      
    },[])
    
    const handleDeleteEmployee=(id)=>{
      fetch(`https://kmogu.sse.codesandbox.io/delete/${id}`,{
        method:"put",
        headers:{
          "Content-Type":"application/json"
        }
      }).then(data=>data.json())
      .then(data=>{
        console.log(data)
        dispatch({type:"DELETE",payload:data.employee})
      })
      .catch(err=>console.log(err))
      
      return (()=>{
        return
      })

    }

    const handleEditEmployee=(edit)=>{
      setEdit(edit)
      setForm(true)
      
    }

  // to toggle from 
    if(form){
      return <EmployeeForm data={edit}/>
    }

  return(
    <>
      <div className="container">
        <div className="m-4">
          <div className="row formContainer col-12 offset-md-2 col-md-8">
            <div className="row pb-4">
                <h4>Employee List</h4>
                <button onClick={()=>setForm(true)} className="ml-2 btn-secondary btn">Create New +</button>
            </div>
            <div className="table-responsive">

              <table className="table">
                <thead>
                  <tr>
                    <th>Fullname</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>City</th>
                    <th>  
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    state.employee && state.employee.map(ele=>(
                      <tr key={ele._id}>
                    <th>{ele.name}</th>
                    <td>{ele.email}</td>
                    <td>{ele.mobile}</td>
                    <td>{ele.city}</td>
                    <td>
                      <i className="fa  fa-pencil inline m-1 p-1 cursor" onClick={()=>handleEditEmployee(ele)}></i>
                      <i className="fa fa-trash inline m-1 p-1 cursor" onClick={()=>handleDeleteEmployee(ele._id)}></i>
                    </td>
                  </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployeeDetails