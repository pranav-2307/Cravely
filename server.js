const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'));
app.get('/menu', (req, res) => res.render('partials/menu'));
app.get('/cart', (req, res) => res.render('partials/cart'));
app.get('/checkout', (req, res) => res.render('partials/checkout'));
app.get('/about', (req, res) => res.render('about'));
app.get('/contact', (req, res) => res.redirect('/about'));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});