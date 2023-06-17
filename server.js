const express = require('express');
const app = express();
app.listen(4000, function(){
  console.log("the server has started");
})
app.use(express.static("public"));

app.get("/", function(request,response){

  response.sendFile(__dirname + "/index.html");
});
