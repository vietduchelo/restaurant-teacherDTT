let Restaurant = require("./../models/restaurant.model");
let crypto = require("./../utils/crypto");
let message = require('./../utils/message');

module.exports = {
    // getAllUser: getAllUser,
    // getOneUser: getOneUser,
    createRestaurant: createRestaurant
    // updateUser: updateUser,
    // deleteUser: deleteUser,
}

// function getAllUser(callback) {
//     //Xử lý business 
//     //Vào db lấy hết user ra.

//     User.find({},
//         {password: 0}
//     ).exec(function (err, users) {
//         if (err) {
//             //Trong quá trình lấy dữ liệu bị lỗi. 
//             callback(err);
//         } else {
//             //Trả về kết quả cho controller
//             callback(null, users);
//         }
//     });
// }

// function getOneUser(id) {
//     return new Promise(function (res, rej) {
//         //Tìm một user có _id = id.
//         User.findOne({
//             _id: id
//         }).exec(function (err, userData) {
//             if (err) {
//                 rej(err);
//             } else {
//                 if (!userData) {
//                     rej({
//                         statusCode: 400,
//                         message: message.ERROR_MESSAGE.USER.NOT_FOUND
//                     });
//                 } else {
//                     res(userData);
//                 }
//             }
//         });
//     });
// }

function createRestaurant(request) {

return new Promise((res, rej) => {
    Restaurant.find({
      name: request.names
    }).exec(function (err, RestaurantData) { // lam tiep
        if (err) {
            rej(err);
        } else {
            if (userData.length>0) {
                rej({
                    statusCode: 404,
                    message: message.ERROR_MESSAGE.USER.EXIST
                });
            } else {
        let salt = crypto.genSalt();
         var newUser = new User({
        email: request.email,
        name: request.name,
        salt: salt,
        password: crypto.hashWithSalt(request.password, salt),
        role: request.role,
        createdDate: new Date()
    });
                newUser.save(function (err, response) {
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

// function updateUser(request) {
//     return new Promise((res, rej) => {
//         User.findOne({
//             _id: request.id
//         }).exec(function (err, userData) {
//             if (err) {
//                 rej(err);
//             } else {
//                 if (!userData) {
//                     rej({
//                         statusCode: 404,
//                         message: message.ERROR_MESSAGE.USER.NOT_FOUND
//                     });
//                 } else {
//                     //Có user để sửa. Và mình sẽ cập nhật nó.
//                     //Thay đổi dữ liệu.

//                     userData.name = request.name || userData.name;
//                     userData.role = request.role || userData.role;

//                     //Thay đổi mật khẩu
//                     if (request.password) {
//                         userData.password = crypto.hashWithSalt(request.password, userData.salt);
//                     }

//                     //Lưu trữ lại.

//                     userData.save(function (err, response) {
//                         if (err) {
//                             rej(err);
//                         } else {
//                             res(response);
//                         }
//                     });
//                 }
//             }
//         });
//     });
// }

// function deleteUser(id) {
//     return new Promise((res, rej) => {
//         User.findOne({
//             _id: id
//         }).exec(function (err, userData) {
//             if (err) {
//                 rej(err);
//             } else {
//                 if (!userData) {
//                     rej({
//                         statusCode: 404,
//                         message: message.ERROR_MESSAGE.USER.NOT_FOUND
//                     })
//                 } else {
//                     User.remove({
//                         _id: id
//                     }).exec(function (err, response) {
//                         if (err) {
//                             rej(err);
//                         } else {
//                             res({
//                                 message: message.SUCCESS_MESSAGE.USER.DELETED
//                             });
//                         }
//                     });
//                 }
//             }
//         });
//     });
// }