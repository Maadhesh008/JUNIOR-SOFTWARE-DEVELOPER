const {MongoClient} = require("mongodb")
var exp=require('express')
var app=new exp()
var pwd="";


//get method api

app.get("/updatefun",async(request,response)=>{

   

    var client=new MongoClient("mongodb://127.0.0.1:27017/");
    client.connect()
    const data={"usr": request.query.un,"pwd": request.query.pw};
    response.write("<h1>UPDATE PASSWORD FOR USER: "+data.usr+"</h1>")
    try{
        const result= await client.db("jsd").collection("login").updateOne({usr: data.usr}, {$set: {pwd: data.pwd}})
        console.log(result)
        
       
        if(result.modifiedCount==0)
        {
            response.write("<h1>NO RECORDS FOUND FOR USERNAME : "+data.usr+"</h1>")
        }   
        else
        {
            response.write("<h1>PASSWORD UPDATED SUCCESSFULLY FOR USERNAME: "+data.usr+"</h1>")
        }
    }
    catch{
        console.log("Error")
        response.write("Retrieval Error")
    }


    
    response.end()

}).listen(8995)

console.log("Port lisitining at 8995......")