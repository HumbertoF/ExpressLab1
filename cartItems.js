
const express = require('express');
const cartData = require('./cartData');
const cartItems = express.Router();



cartItems.get('/', (req, res) => {
    console.log('test');
    console.log(req.body);
res.send(cartData);
});
    
    cartItems.post('/cartItems', (req, res) => {
        console.log(req.body); 
    res.send(cartData);
    });
       
        cartItems.put('/cartItems/_ID_', (req, res) => {
            console.log(req.body); 
        res.send('Updating cartItems..');
        });
            cartItems.delete('/cartItems/_ID_', (req, res) => {
                console.log(req.body); 
            res.send('Deleting cartItems..');
            });
module.exports = cartItems;

