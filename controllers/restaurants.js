const express = require('express');
const router = express.Router();

const Post = require('../models/Restaurants.js');

router.get('/', (req, res) => {
  Post.find({}).then(post => {
    res.render('restaurants/Index', { post });
  });
});

router.get('/new', (req, res) => {
  res.render('restaurants/New');
});

router.get('/:id', (req, res) => {
  Post.findOne({ _id: req.params.id }).then(post => {
    res.render('restaurants/Show', post);
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  Post.create(req.body).then(() => {
    res.redirect('/');
  });
});

router.get('/edit/:id', (req, res) => {
  Post.findOne({ _id: req.params.id }).then(post => {
    res.render('restaurants/Edit', post);
  });
});

router.put('/:id', (req, res) => {
  Post.findOneAndUpdate(
    { _id: req.params.id },
    req.body
  ).then(post => {
    res.redirect(`/restaurants/${post.id}`);
  });
});

router.delete('/:id', (req, res) => {
  Post.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect('/');
  });
});

module.exports = router;
