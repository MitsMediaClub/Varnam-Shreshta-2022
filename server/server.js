var fs = require('fs');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var https = require('https');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}))


var opt = {
  
  key: fs.readFileSync(__dirname+"/public/ssl/key.pem"),
  
  cert: fs.readFileSync(__dirname+"/public/ssl/pem.cert"),
  
  ca: [
    fs.readFileSync(__dirname+"/public/ssl/origin_ca_rsa_root.pem")
  ]
};

var httpsServer = https.createServer(opt, app);

httpsServer.listen(443, () =>{
  console.log(`Example app listening on port 443`)
});


app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
})
app.get('/arts.html', (req, res) => {
  res.sendFile(__dirname+'/arts.html')
})
app.get('/sports.html', (req, res) => {
  res.sendFile(__dirname+'/sports.html')
})
app.get('/contact.html', (req, res) => {
  res.sendFile(__dirname+'/contact.html')
})
app.get('/soon.html', (req, res) => {
  res.sendFile(__dirname+'/soon.html')
})
app.get('/682308', (req, res) => {
  res.sendFile(__dirname+'/admin.html')
})
app.get('/Assets/Posters',(req,res)=>{
  const path = require('path');
  const fs = require('fs');

  fs.readdir(
    path.resolve(__dirname+'/public/Assets/Posters'),
    (err, files) => {
      if (err) throw err;
      res.send(files)
    }
    );
    
  })
  app.post('/score',(req,res)=>{
    console.log(req.body)
    const fs = require('fs')
    const jsonString = JSON.stringify(req.body)
    fs.writeFile(__dirname+'/public/scores.json', jsonString, err => {
      if (err) {
        console.log('Error writing file', err)
    } else {
      console.log('Successfully wrote file')
    }
  })
  res.redirect('/admin.html')
})
