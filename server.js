const express = require('express');
const app = express();

app.use(express.static("public"));
app.set("view engine","ejs");


app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
});



const PORT = process.env.PORT||1200;
app.listen(PORT,console.log(`server running on port ${PORT}`));