const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static('public'));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./login.html'))
}
)

app.listen(3000,function() {
    console.log("Server Live..");
})