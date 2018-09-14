var router = require('express').Router();
var restaurantController = require('./../controller/restaurant.controller');

module.exports = function () {

    router.get('/', restaurantController.getAllRestaurant); 
    router.get('/:id', restaurantController.getOneRestaurant); 
    router.post('/', restaurantController.createRestaurant); 
    router.put('/:id', restaurantController.updateRestaurant);  
    router.delete('/:id', restaurantController.deleteRestaurant); 
    return router;
};

