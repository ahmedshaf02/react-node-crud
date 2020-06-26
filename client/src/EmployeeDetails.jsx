
import React, { useEffect, useState } from "react"
import EmployeeForm from "./EmployeeForm"

const EmployeeDetails =()=>{
  
  const [data,setData] = useState([])
    useEffect(()=>{

      fetch("https://kmogu.sse.codesandbox.io/allemployee",{
        method:"get",
        headers:{
          "Content-Type":"application/json"
        }
      }).then(data=>data.json())
      .then(data=>{
        console.log(data.employee)
        setData(data.employee)
      })
      .catch(err=>console.log(err))
      
      return (()=>{
        return
      })

    },[])
  return(
    <>
      <div className="container">
        <div className="m-4">
          <div className="row formContainer col-12 offset-md-2 col-md-8">
            <div className="row pb-4">
                <h4>Employee List</h4>
                <button className="ml-2 btn-secondary btn">Create New +</button>
            </div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Fullname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">City</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data && data.map(ele=>(
                  <tr>
                    <th>{ele.name}</th>
                    <td>{ele.email}</td>
                    <td>{ele.mobile}</td>
                    <td>{ele.city}</td>
                  </tr>
                    ))
                  }
                  {/* <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr> */}
                  
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployeeDetails