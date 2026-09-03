const {MongoClient} = require("mongodb")
var exp=require('express')
var app=new exp()
var pwd="";


//get method api

app.get("/detfun",async(request,response)=>{

   

    var client=new MongoClient("mongodb://127.0.0.1:27017/");
    client.connect()
    const data={"usr": request.query.un};
    response.write("<h1>FIND PASSWORD FOR USERNAME: "+data.usr+"</h1>")
    try{
        const result= await client.db("jsd").collection("login").find(data).toArray()
        console.log(result)
        var len=result.length;
        if(len==0)
        {
            response.write("<h1>NO RECORDS FOUND FOR USERNAME : "+data.usr+"</h1>")
        }
        else
        {
            response.write("<h1>RESULT FOR USERNAME: "+data.usr+"</h1>")
            response.write("<h1>PASSWORD: "+result[0].pwd+"</h1>")
        }
    }
    catch{
        console.log("Error")
        response.write("Retrieval Error")
    }


    
    response.end()

}).listen(8993)

console.log("Port lisitining at 8993......")