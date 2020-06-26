
const mongo = require("mongoose")

const employeeSchema = mongo.Schema({

    name:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true
    },
    mobile:{
      type:String,
      required:true
    },
    city:{
      type:String,
      required:true
    }
})

mongo.model("Employee",employeeSchema)