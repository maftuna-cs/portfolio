const express = require("express");//import the express package (installed)
const exphbs = require('express-handlebars');


const app = express(); //express app object

// const programModel = require("./models/works");

app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get("/", (req,res) => {
    
  res.render("home", {
      title:"Home",
      headingInfo: "Home page",
      dynamicContent: "something",
     

  });
})



app.get("/about", (req,res) => {
    
  res.render("about", {
      title:"about",
      headingInfo: "about page",
      dynamicContent: "something",
     
  });
})



app.get("/works", (req,res) => {
    
  res.render("works", {
      title:"works",
      headingInfo: "works page",
      dynamicContent: "something",
      // programs: programModel.getallPrograms()
      
  });
})



// ***************************************************

app.get("/goodfood", (req,res) => {
    
  res.render("goodfood", {
      title:"goodfood ui",
      headingInfo: "goodfood ui page",
  });
})

app.get("/roof", (req,res) => {
    
  res.render("roof", {
      title:"roof website",
      headingInfo: "roof website and ui",
  });
})

app.get("/peach-branding", (req,res) => {
    
  res.render("peach-branding", {
      title:"Peach Juice Branding",
      headingInfo: "Peach Juice branding",
  });
})



const PORT = process.env.PORT;
app.listen(PORT , ()=>{

    console.log(`Web Server is up and running`);
})


// const PORT = 3001;
// app.listen(PORT,() => {
//     console.log(`Web server is connected.`);
// });