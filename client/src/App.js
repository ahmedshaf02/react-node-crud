import React from "react";
import "./styles.css";
import EmployeeDetails from "./EmployeeDetails"
import EmployeeForm from "./EmployeeForm"
import {useDispatch} from "react-redux"


export default function App() {
const dispatch = useDispatch()

const employee = JSON.parse(localStorage.getItem("employee"))
dispatch({type:"UPDATE",payload:employee})

  return (
    <div className="App">
     {/* <EmployeeForm/> */}
     <EmployeeDetails/>
    </div>
  );
}
