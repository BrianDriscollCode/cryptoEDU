const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(express.static('./public/navIcons'));
app.use(express.static('./public/styling'));
app.use(express.static('./public/homeImages'));
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
