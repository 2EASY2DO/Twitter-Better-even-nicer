const express = require('express');
const method = require('method-override');
const mongoose = require('./db/connection.js');

const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(method('_method'));
app.use(express.static('public'));

const Post = require('./models/Restaurants.js');

const restaurantsController = require('./controllers/restaurants.js');

app.get('/', (req, res) => {
  Post.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .then(post => {
      res.render('Index', { post });
    });
});

app.use('/restaurants', restaurantsController);

mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

app.listen(8000, () => console.log('server is running'));
