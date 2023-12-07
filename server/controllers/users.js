const express = require('express');
const  {getAll, search, update,remove, login,register, addUser,getUser,updateUser,}= require('../models/users');

const router = express.Router();

router
    
    .patch('/:username/:password', (req, res, next) => {
        users.addUser(req.params.username, req.params.password).then(result => res.status(200).send(result))
    })
    .patch('/:username', (req, res) => {
        users.getUser(req.params.username).then(user => res.status(200).send(user))
    })
    .post(`/:username`, (req, res, next) => {
        users.updateUser(req.body.user).then(user => res.status(200).send(user.value))
    })
    get('/', requireUser(true), (req, res, next) => {

    res.send(getAll());

    })
    .get('/search', requireUser(), (req, res, next) => {

    const results = search(req.query.q);
    res.send(results);
    })  
    .get('/:id', requireUser(), (req, res, next) => {

    const user = get(+req.params.id);
    res.send( user );

    })
    .post('/register', (req, res, next) => {

    const user = register(req.body);
    res.send(user);

    }).post('/login', (req, res, next) => {

    login(req.body.email, req.body.password)
    .then(user => {
        res.send(user);
    }).catch(next)

    })
    .patch('/:id', requireUser(), (req, res, next) => {
    
    if(req.user.id !== +req.params.id && !req.user.admin) {
        return next({
            status: 403,
            message: 'You can only edit your own account. (Unless you are an admin)'
        });
    }
    req.body.id = +req.params.id;
    const user = update(req.body);
    res.send(user);
  
    })
    .delete('/:id', requireUser(true), (req, res, next) => {
    
    remove(+req.params.id);
    res.send({message: 'User removed'});
    });



module.exports = router;