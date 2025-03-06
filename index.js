var express=require('express')
var mongoose=require('mongoose')
var app=express();
var cors=require('cors')
app.use(express.json())
app.use(cors())
//create a root path
app.get('/',(req,res)=>{res.send("welcome")})
//open the port
app.listen(8082,()=>{console.log("SERVER CONNECTED")})
//connect mongodb
mongoose.connect('mongodb+srv://arunmass:arunmass@cluster0.sw9tb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/bank').then(()=>{console.log("DB CONNECTED")})

let data=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    amount:Number
})

let Data=mongoose.model("test",data)

// let data1=new Data({
//     name:"arun",
//     email:"arun@gmail.com",
//     password:"xyz",
//     amount:10000
// })
// data1.save()

app.get('/data',(req,res)=>{Data.find().then((item) =>res.send(item))});

app.post('/create',(req,res)=>{Data.create(req.body).then((item)=>res.send(item))});

app.delete('/:id',(req, res)=>{Data.findByIdAndDelete(req.params.id).then((item)=>{res.send("Deleted Successfully")})})

