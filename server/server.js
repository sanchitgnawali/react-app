const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname,'../','public');

app.use(express.static(publicPath));

app.get('*',(request,respond)=>{
    respond.sendFile(path.join(publicPath,'index.html'))
});

app.listen(3000,()=>{
    console.log('Server is Up');
});