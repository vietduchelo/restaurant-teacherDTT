var message = require('./../utils/message');
var restaurantService = require('./../service/restaurant.service');

module.exports = {
   
    getAllRestaurant: getAllRestaurant,
    getOneRestaurant: getOneRestaurant,
    createRestaurant: createRestaurant,
    updateRestaurant: updateRestaurant,
    deleteRestaurant: deleteRestaurant,
 }

function getAllRestaurant(req, res, next) {

    restaurantService.getAllRestaurant().then((response)=>{
        res.send(response);
    }).catch((err)=> {
        res.status(err.statusCode).send(err);
    })
}

function getOneRestaurant(req, res, next) {
    //Lấy dữ liệu

    let id = req.params.id;

    if (!id) {
        res.status(400).send({
            message: message.ERROR_MESSAGE.USER.INVALID
        });
    }

    restaurantService.getOneRestaurant(id).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        res.status(err.statusCode).send(err);
    })
}

function createRestaurant(req, res, next) {
    let params = {
        name: req.body.name,
        address: req.body.address,
        lat: req.body.lat,
        lng: req.body.lng,
    }
    restaurantService.createRestaurant(params).then((response)=>{
        res.send(response);
    }).catch((err)=> {
        res.status(err.statusCode).send(err);
    })
}

function updateRestaurant(req, res, next) {
    let params = {
        id: req.params.id,
        name: req.body.name,
        address: req.body.address,
        lat: req.body.lat,
        lng: req.body.lng
    }

    restaurantService.updateRestaurant(params).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.status(err.statusCode).send(err);
    });
}

function deleteRestaurant(req, res, next) {
    let id = req.params.id;
    restaurantService.deleteRestaurant(id).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.status(err.statusCode).send(err);
    });
}

