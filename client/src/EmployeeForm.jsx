
import React, { useState } from "react"
import "./styles.css"
const EmployeeForm =()=>{

  // for form input
  const [data,setData] = useState({
    name:"",
    email:"",
    mobile:"",
    city:""
  })


  const handleFormSubmit=e=>{
    e.preventDefault()
    const{name,email,mobile,city} = data
      if(!name || !email || !mobile || !city){
        return alert("Error: please enter value")
      }
      console.log(data)

      fetch("https://kmogu.sse.codesandbox.io/addemployee",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({name,email,mobile,city})

      }).then(data=>data.json())
      .then(data=>{
        if(data.error){
          alert(data.error)
        }
        

      })
      .catch(err=>console.log(err))
      
      return (()=>{
        return
      })
  }
  
  return(
    <>
      <div className="container">
        <div className="m-4">
          <div className="row formContainer col-12 offset-md-2 col-md-8">
          <h4 className="pb-3">Employee Form</h4>
          <form onSubmit={handleFormSubmit}>

            <div className="row text-left">
              <div className="col ">
                <label >Full name</label>
                <input value={data.name} onChange={e=>setData({...data,name:e.target.value})}
                  type="text" className="form-control" placeholder="First name"/>
              </div>
            </div>

            <div className="row mt-3 text-left">
              <div className="col">
                <label >Email</label>
                <input value={data.email} onChange={e=>setData({...data,email:e.target.value})}
                 type="text" className="form-control" placeholder="First name"/>
              </div>
            </div>

            <div className="row mt-3 text-left">
              <div className="col">
                <label >mobile</label><br/>
                <input value={data.mobile} onChange={e=>setData({...data,mobile:e.target.value})}
                  type="number" className="form-control" placeholder="First name"/>
              </div>
              <div className="col">
                <label >city</label>
                <input value={data.city} onChange={e=>setData({...data,city:e.target.value})}
                  type="text" className="form-control" placeholder="Last name"/>
              </div>
            </div>

            <div className="text-left">
              <button type="submit" className=" mt-4 text-left btn submitBtn">Submit</button>
              <button type="button"className=" mt-4 ml-3 text-left btn viewBtn">View All</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployeeForm