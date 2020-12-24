const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../models/user');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');


router.post('/verifyToken', auth, async (req, res) => {
  const { firstName, lastName, email, _id } = req.user;
  res.send({ firstName, lastName, email, _id });
});

router.post('/signIn', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid email or password.');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid email or password.');

  const token = user.generateAuthToken();

  const { _id, firstName, lastName, email } = user;
  res.send({_id, firstName, lastName, email, token});
});


router.post('/signUp', async (req, res) => {
  const { error } = validate2(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered.');

  user = new User(_.pick(req.body, ['firstName', 'lastName', 'email', 'password']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken();

  const { _id, firstName, lastName, email } = user;
  res.send({_id, firstName, lastName, email, token});
});

router.post('/userInfo', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid password.');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password.');

  const { firstName, lastName, email } = user;
  res.send({firstName, lastName, email});
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const user = await User.findByIdAndUpdate(req.params.id,
    { 
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password,
    }, { new: true });

  if (!user) return res.status(404).send('The user with the given ID was not found.');
  
  res.send(user);
});

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

function validate(req) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  });
  return schema.validate(req);
}

function validate2(req) {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(req);
}


module.exports = router; 