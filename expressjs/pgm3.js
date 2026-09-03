const {MongoClient} = require("mongodb")
var exp=require('express')
var app=new exp()


//get method api

app.get("/showall",async(request,response)=>{

   

    var client=new MongoClient("mongodb://127.0.0.1:27017/");
    client.connect()
    response.write("<h1>READ ALL DATA FROM MONGODB</h1>")
    try{
        const result= await client.db("jsd").collection("login").find({}).toArray()
        console.log(result)
        response.write("<h1>TOTAL RECORDS available : "+result.length+"</h1>")
        response.write("<table border='2' align='center' cellpadding='10' cellspacing='0' bgcolor='lightgreen'>")
        response.write("<tr><th>SERIALNO</th><th>USERNAME</th><th>PASSWORD</th></tr>")
        for(let i=0;i<result.length;i++){
            response.write("<tr><td>"+(i+1)+"</td><td>"+result[i].usr+"</td><td>"+result[i].pwd+"</td></tr>")
        }
        response.write("</table>")
    }
    catch{
        console.log("Error")
        response.write("Retrieval Error")
    }


    
    response.end()

}).listen(8992)

console.log("Port lisitining at 8992......")