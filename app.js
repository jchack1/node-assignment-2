const express = require('express');
const path = require("path");
const fs = require("fs");
const logger = require("./middleware/logger");
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs"); 


//get pages

app.get("/", function(request, response){
  response.render("index");
});

app.get("/photography", function(request, response){
    response.render("photography");
  });

app.get("/art", function(request, response){
    response.render("art");
  });

app.get("/about", function(request, response){
    response.render("about");
  });

app.get("/contact", function(request, response){
    response.render("contact");
  });


//middleware
//whenever we submit the form, use logger function
app.use("/submit", logger);


//post
app.post('/submit', function(request, response){
    const name = request.body.name;
    const email = request.body.email;

    response.render("submit", {
      name: name,
      email: email
    });

  });


//static assets
app.use(express.static(path.join(__dirname, "assets")));


//listening on port 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, function (){
    console.log(`Listening on port ${PORT}`);
});