var message = require('./../utils/message');
var userService = require('./../service/restaurant.service');

module.exports = {
   
    // getAllUser: getAllUser,
    // getOneUser: getOneUser,
    createRestaurant: createRestaurant
//     updateUser: updateUser,
//     deleteUser: deleteUser,
 }

// function getAllUser(req, res, next) {

//     userService.getAllUser(function (err, response) {
//         if (err) {
//             res.status(err.statusCode).send(err);
//         } else {
//             res.send(response);
//         }
//     });
// }

// function getOneUser(req, res, next) {
//     //Lấy dữ liệu

//     let id = req.params.id;

//     if (!id) {
//         res.status(400).send({
//             message: message.ERROR_MESSAGE.USER.INVALID
//         });
//     }

//     userService.getOneUser(id).then(function (response) {
//         res.send(response);
//     }).catch(function (err) {
//         res.status(err.statusCode).send(err);
//     })
// }

function createRestaurant(req, res, next) {
    let params = {
        name: req.body.name,
        address: req.body.address,
        lat: req.body.lat,
        lng: req.body.lng,
    }
    userService.createRestaurant(params).then((response)=>{
        res.send(response);
    }).catch((err)=> {
        res.status(err.statusCode).send(err);
    })
}

// function updateUser(req, res, next) {
//     let params = {
//         id: req.params.id,
//         password: req.body.password,
//         name: req.body.name,
//         role: req.body.role,
//     }

//     userService.updateUser(params).then((response) => {
//         res.send(response);
//     }).catch((err) => {
//         res.status(err.statusCode).send(err);
//     });
// }

// function deleteUser(req, res, next) {
//     let id = req.params.id;

//     userService.deleteUser(id).then((response) => {
//         res.send(response);
//     }).catch((err) => {
//         res.status(err.statusCode).send(err);
//     });
// }


// function login(req, res, next) {
//     let userData = {
//         username: req.body.username,
//         password: req.body.password
//     };

//     userService.login(userData, function (err, response) {
//         if (err) {
//             res.status(err.statusCode).send(err);
//         } else {
//             res.send(response);
//         }
//     })
// }
