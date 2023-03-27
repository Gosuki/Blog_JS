
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express()
const port = 3000
//static file path
app.use(express.static(path.join(__dirname, 'public')));
//xu ly req.body
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
//XMLtHttpRequest, fetch .....

//HTTP logger
// app.use(morgan('combined'));
//template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.post('/search', (req, res) => {
  //query params thì .query còn form thì body
  console.log(req.body)
  res.send('');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})