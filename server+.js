const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('public'));

// get route
app.get('/', async(req,res) =>{
  await res.sendFile(path.join(__dirname, './public/index.html'))
});

app.listen(PORT, ()=> {console.log(`😊 App listening on port ${PORT}`)})