let Restaurant = require("./../models/restaurant.model");
let crypto = require("./../utils/crypto");
let message = require('./../utils/message');

module.exports = {
    getAllRestaurant: getAllRestaurant,
    getOneRestaurant: getOneRestaurant,
    createRestaurant: createRestaurant,
    updateRestaurant: updateRestaurant,
    deleteRestaurant: deleteRestaurant,
}

function getAllRestaurant(callback) {
  return new Promise(function(res, rej){
      Restaurant.find({}).exec(function(err, RestaurantData){
          if(err){
              rej(err)
          }
          else{
              if(!RestaurantData){
                  rej({
                      statusCode: 400,
                      message: message.ERROR_MESSAGE.USER.NOT_FOUND
                  })
              }
              else{
                  res(RestaurantData)
              }
          }
      })
  })
}

function getOneRestaurant(id) {
    return new Promise(function (res, rej) {
        //Tìm một user có _id = id.
        Restaurant.findOne({
            _id: id
        }).exec(function (err, restaurantData) {
            if (err) {
                rej(err);
            } else {
                if (!restaurantData) {
                    rej({
                        statusCode: 400,
                        message: message.ERROR_MESSAGE.USER.NOT_FOUND
                    });
                } else {
                    res(restaurantData);
                }
            }
        });
    });
}
function createRestaurant(request) {
return new Promise((res, rej) => {
    Restaurant.find({
      name: request.name
    }).exec(function (err, RestaurantData) { // lam tiep
        if (err) {
            rej(err);
        } else {
            if (RestaurantData.length>0) {
                rej({
                    statusCode: 404,
                    message: message.ERROR_MESSAGE.USER.EXIST
                });
            } else {
       
         var newRestaurant = new Restaurant({
            name: request.name,
            address: request.address,
            lat: request.lat,
            lng: request.lng
    });
                newRestaurant.save(function (err, response) {
                    if (err) {
                        rej(err);
                    } else {
                        res(response);
                    }
                });
            }
        }
    });
});
}

function updateRestaurant(request) {
    return new Promise((res, rej) => {
        Restaurant.findOne({
            _id: request.id
        }).exec(function (err, restaurantData) {
            if (err) {
                rej(err);
            } else {
                if (!restaurantData) {
                    rej({
                        statusCode: 404,
                        message: message.ERROR_MESSAGE.USER.NOT_FOUND
                    });
                } else {
                    //Có restaurant để sửa. Và mình sẽ cập nhật nó.
                    //Thay đổi dữ liệu.

                    restaurantData.name = request.name ||  restaurantData.name;
                    restaurantData.address = request.address ||  restaurantData.address;
                    restaurantData.lat = request.lat ||  restaurantData.lat;
                    restaurantData.lng = request.lng ||  restaurantData.lng;

                    //Lưu trữ lại.

                    restaurantData.save(function (err, response) {
                        if (err) {
                            rej(err);
                        } else {
                            res(response);
                        }
                    });
                }
            }
        });
    });
}

function deleteRestaurant(id) {
    return new Promise((res, rej) => {
        Restaurant.find({
            _id: id
        }).exec(function (err, restaurantData) {
            if (err) {
                rej(err);
            } else {
                if (!restaurantData) {
                    rej({
                        statusCode: 404,
                        message: message.ERROR_MESSAGE.USER.NOT_FOUND
                    })
                } else {
                    Restaurant.remove({
                        _id: id
                    }).exec(function (err, response) {
                        if (err) {
                            rej(err);
                        } else {
                            res({
                                message: message.SUCCESS_MESSAGE.USER.DELETED
                            });
                        }
                    });
                }
            }
        });
    });
}