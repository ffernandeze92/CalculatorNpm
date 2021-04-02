const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,rest){
  rest.sendFile(__dirname + "/index.html");
  //rest.sendFile("__dirname");
});

app.post("/",function(req,rest){
  //rest.send("Thanks for trying")
  console.log(req.body);

  var num1 = Number(req.body.num1);
  var num2  = Number(req.body.num2);
  var result = num1 + num2;

  rest.send("the result is: "+result);
});

app.listen(3000,function(){
  console.log("server is running");
});
