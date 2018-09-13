// var CronJob = require('cron').CronJob;
// var request = require('request');
// var _ = require('lodash');
// var Device = require('./../models/device.model');
// var config = require('./../config');
// var timer = require('./../utils/timer');
// var FCM = require('fcm-node');
// var fcm = new FCM(config.fcm.serverKey);
// var messages = [1, 2, 3, 4, 5];
// var time = '00 00 ' + timer.geTimeZone() + ' * * *';
// new CronJob(time, function () {
//         // 24h
//         Device.find({}).exec(function (err, devices) {
//             if (devices) {
//                 var message = messages[parseInt(Math.floor((Math.random() * 5)))];
//                 _.forEach(devices, function (item) {
//                     if (item && item.deviceId) {
//                         // sendMessageToUser(item.deviceId, message);
//                     }
//                 });
//             }
//         });

//         //72h
//         var currentTime = new Date();
//         var startDate = new Date(config.startDate);
//         startDate.setHours(timer.geTimeZone(), 0, 0, 0);
// 	var timeHasPassed = (parseInt(Math.abs(currentTime - startDate)) + 3600000) % (86400000 * 3);
//         if (timeHasPassed < 7200000) {
//             var message = messages[parseInt(Math.floor((Math.random() * 5)))];
//             Device.find({}).exec(function (err, devices) {
//                 if (devices) {
//                     _.forEach(devices, function (item) {
//                         if (item && item.deviceId) {
//                             sendMessageToUser(item.deviceId, message);
//                         }
//                     });
//                 }
//             });
//         }
//     }, function () {

//         /* This function is executed when the job stops */
//     },
//     true, /* Start the job right now */
//     'Asia/Jakarta' /* Time zone of this job. */
// );

// function sendMessageToUser(deviceId, message) {
//     request({
//         url: 'https://fcm.googleapis.com/fcm/send',
//         method: 'POST',
//         headers: {
//             'Content-Type': ' application/json',
//             'Authorization': 'key=' + config.fcm.serverKey,
//             'Sender': 'id=' + config.fcm.senderId
//         },
//         body: JSON.stringify({
//             'data': {
//                 'mes_type': message
//             },
//             'to': deviceId
//         })
//     }, function (error, response, body) {
//         if (error) {
//             // console.error(error, response, body);
//         } else if (response.statusCode >= 400) {
//             // console.error('HTTP Error: ' + response.statusCode + ' - ' + response.statusMessage + '\n' + body);
//         } else {
//             // console.log('Done!')
//         }
//     });
// }