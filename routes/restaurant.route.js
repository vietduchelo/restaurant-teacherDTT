var router = require('express').Router();
var restaurantController = require('./../controller/restaurant.controller');

module.exports = function () {

    router.get('/', userController.getAllRestaurant); 
    router.get('/:id', userController.getOneRestaurant); 
    router.post('/', userController.createRestaurant); 
    router.put('/:id', userController.updateRestaurant);  
    router.delete('/:id', userController.deleteRestaurant); 

    return router;
};

