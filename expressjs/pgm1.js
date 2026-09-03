const {MongoClient} = require("mongodb")
var exp=require('express')
var app=new exp()
var usr,pwd;

//get method api

app.get("/testfun",async(request,response)=>{

    usr=request.query.un;
    pwd=request.query.pw;
    const data={"usr":usr,"pwd":pwd}

    var client=new MongoClient("mongodb://127.0.0.1:27017/");
    client.connect()
    response.write("<h1>Express And MongoDB Connection Success</h1>")
    try{
        const result= await client.db("jsd").collection("login").insertOne(data)
        console.log(result)
        response.write("Data Successfully Inserted")
    }
    catch{
        console.log("Error")
        response.write("Insertion Error")
    }


    
    response.end()

}).listen(8991)

console.log("Port lisitining at 8991......")
/*var exp=require("express")
var app=new exp()
var un,pw;


//get method
app.get("/testfun",(request,response)=>{

un=request.query.un;
pw=request.query.pw;

response.write("<h1> USERNAME IS : "+un+"</h1>")
response.write("<h1> PASSWORD IS : "+pw+"</h1>")
if(un==="maadhesh" && pw==="1234")
{
    response.write("<font color='green' size-30> valid user </font>")
}
else
{
    response.write("<font color='red' size-30> invalid user </font>")
}

//response.send("<h1> WELCOME TO EXPRESS JS </h1>")
response.end()

}).listen(8990)

console.log("server is running on port 8991")*/


