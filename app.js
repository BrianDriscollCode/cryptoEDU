const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(express.static('./public/navIcons'));
app.use(express.static('./public/styling'));
app.use(express.static('./public/homeImages'));
app.use(express.static('./public/aboutImages'));
app.use(express.static('./public/logo'));

app.listen(3000);

app.set('view engine', 'ejs');
console.log('server activated');

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/articles', (req, res) => {
  res.render('articles')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.get('/free-Resources', (req, res) => {
  res.render('freeResources')
})
