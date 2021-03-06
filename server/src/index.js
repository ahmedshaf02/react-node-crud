
const mongo  = require("mongoose")
const express  = require("express")
const app = express()
const cors = require("cors")
const PORT = 4000

const mongoUrl = "mongodb+srv://ahmedshaf:GaUjihNXNFamn3mi@cluster0-s3efd.mongodb.net/Employee?retryWrites=true&w=majority"

mongo.connect(mongoUrl,{
useNewUrlParser:true,
useUnifiedTopology:true
})
.then(connect=>console.log("mongoDb connect"))
.catch(err=>console.log("error",err))

require("./model/employee")
app.use(cors())
app.use(express.json())
app.use(require("./routes/employeesDetails"))

app.listen(PORT,()=>{
console.log("server is tunning on port ",PORT)
})
