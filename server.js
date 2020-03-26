const express = require("express");//import the express package (installed)
const exphbs = require('express-handlebars');


const app = express(); //express app object

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Web Server Started`);
});