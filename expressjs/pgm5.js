const {MongoClient} = require("mongodb")
var exp=require('express')
var app=new exp()
var pwd="";


//get method api

app.get("/delfun",async(request,response)=>{

   

    var client=new MongoClient("mongodb://127.0.0.1:27017/");
    client.connect()
    const data={"usr": request.query.un};
    response.write("<h1>DELETE RECORD FOR USER: "+data.usr+"</h1>")
    try{
        const result= await client.db("jsd").collection("login").deleteOne(data)
        console.log(result)
        
       
        if(result.deletedCount==0)
        {
            response.write("<h1>NO RECORDS FOUND FOR USERNAME : "+data.usr+"</h1>")
        }   
        else
        {
            response.write("<h1>RECORD DELETED SUCCESSFULLY FOR USERNAME: "+data.usr+"</h1>")
        }
    }
    catch{
        console.log("Error")
        response.write("Retrieval Error")
    }


    
    response.end()

}).listen(8994)

console.log("Port lisitining at 8994......")