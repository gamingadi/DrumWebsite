const express = require("express");
const app=express();
const request=require("request");
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/public/index.html");
});

app.post("/",function(req,res){
  var train=req.body.src;
  var dst=req.body.dst;
  var date1=req.body.date;
  //baseUrl="https://api.railwayapi.com/v2/name-number/train/"
  url="www.google.com"    //baseUrl+train+"/apikey/muovgk3sgl/";

  request(url,function(error,response,body){
    if(error){
      console.log(error);
    }else{
    console.log(body);
    var body=JSON.parse(body);
    console.log(body.train.name);
  }

  });
});
app.listen(3000,function(){
  console.log("Server start at 3000");
});
