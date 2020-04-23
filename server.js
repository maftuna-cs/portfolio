const express = require("express");//import the express package (installed)
const exphbs = require('express-handlebars');


const app = express(); //express app object

app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get("/", (req,res) => {
    
  res.render("home", {
      title:"Home",
      headingInfo: "Home page",
      dynamicContent: "something",
      // info: infoModel.getallInfo(),
      // prgList: prgListModel.getallPrgList()

  });
})

const PORT = 3001;
app.listen(PORT,() => {
    console.log(`Web server is connected.`);
});