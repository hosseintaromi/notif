const webpush = require('web-push');

const vapidKeys = {
  publicKey: 'BK1TtCh8MXbOfVfqmLcaueBsTbU0sZfi5TsBtjGTyMSchL3SG0IWakYM40_efAQuXAyy4fwbJM-MQtOhdxJegrk',
  privateKey: 'yUfwVDlBVC6D7RoA-d68E15YgjKZ4gmT9wA8w8Yb-6U'
}

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = [
  { "endpoint": "https://fcm.googleapis.com/fcm/send/cIp6KRcPtdo:APA91bFwVhkdo5AjRvMuyK8OH6qWr8BB-6a7EjvZXGRJ0sFxn9CMykU_izLXBySwM_ht16Kf1yAvAdvPwjFEoSkdQAqrvITKwsmdccaTcANPywMuasHT2TFYGXA1_OwKycYw9YWpPTWd", "expirationTime": null, "keys": { "p256dh": "BLeO0GZOPRlvAXl7-Wze80htaAwfTocX_wcxZx_qPFTa0YMs0AqXipbpGTXjTJELPk1gn0RJKg_6H9zkHXDKNbk", "auth": "Wmn9_6y6Dmjge149sBnBOQ" } },
  { "endpoint": "https://fcm.googleapis.com/fcm/send/ehVBNLxu4zg:APA91bF2Bg_9KCbm8QsYpiRLRX-9qNpm4QAkwo6112ds1MpIMhJ5fb5Vmcy0lqrBUTYMtt35bv0WUyAeLhbX3HKlDuzTzP0BvE7T15WfWQGLtcddFbgzuUijJjbOP5Bxtb5Udwwbq_Da", "expirationTime": null, "keys": { "p256dh": "BMVwhxq8Qe8JQxc_hUUHKPAMvKXoUgw9ofUvdY1pe9za1bJOzZyPQ0ifbCxyH2b6t7dWjRkV8aYGBqDPxqgXXUM", "auth": "vT2yA2tRjtILRCPZTNZ_GQ" } },
  // solmaz
  { "endpoint": "https://fcm.googleapis.com/fcm/send/cBFVQwc6f_k:APA91bHqdl5snfAvPV_W_yYRA3pGCjxVslbybBieIvx9yeEsQbiDoIaNItsuWz_sIn_ZCbwXj-DIUHgL8LiVJXuBW7gDmZopCRvi2YM1fhDspddPWiCESqGgJ_-Mp_5HeJ-N8uPIZokj", "expirationTime": null, "keys": { "p256dh": "BAp-gFvlAK0IOFrV68I5yJ0JQYDPd-qQVJ3cevnCw6j8SYLskKon9Wdi_CFQ34CyKMJzJXmISUAPJbk9-fyVvL4", "auth": "ZaWeFdBuX41Hr-G6w4hJbw" } },
  // mamadreza
  { "endpoint": "https://fcm.googleapis.com/fcm/send/e9rZVhgQzHk:APA91bHwQO_0jCHdw90Y4bprC3W1GzV89mMDUVtS2MBj_G-DfLAM9MLmhGTHqytCZN3On5UZMTSzX_sWTKTpzl2-JqlL-lIu8Dm8IY2M9m2YskVqS5Ld9O3MCj1vKvkS4LKUKFTTsiJF", "expirationTime": null, "keys": { "p256dh": "BMcoq43ww-PQJW71Tq1WYb1lfrLUr4qiwg_Vr4EBvAU44uZ1SOf1MfKGOhaDWmfPOXGLQlCEt4bQcWzqlWupamc", "auth": "UqL9WKt0rQKzoXN11YuWkQ" } },
  //saleh
  { "endpoint": "https://fcm.googleapis.com/fcm/send/eCFAu5ctdgY:APA91bEuEABzEvklNDQI6YEHOU91xGrdm6aez-i2rHsi5dzTWeCkJng6w_KdNlaMu2-svmYv67sAu9Jd7OYYA38qS_mjpDxMHa7rUKmvdqhbodfIe5_0SaiTdBCBJpJwgAZTiCxqM2i5", "expirationTime": null, "keys": { "p256dh": "BHPj9qlwvbF7W9IILmF9w6-AomVcZMcbOnWg6JWwL7e6D-jzFsK4t7bs-1LltMqrVwtYeTuQaGtsEBQAv-zTnEY", "auth": "4XF6YbsDd0UeghF5NtRbvA" } },
  // mardane
  { "endpoint": "https://fcm.googleapis.com/fcm/send/eQF--mWANyc:APA91bFf2wAGcdIn9rwjk0J6-3Wapjc-ZQEj8NWIYrakZ92XESSrGbUk3Bf7x3u0B7calvRAFG1PmkQRJdFxF1nk524qAA0F_IfD-j0qKwrzEqAxYtdtIqlbwABy_0l997TnqMasd8HV", "expirationTime": null, "keys": { "p256dh": "BG7y1xha5nWg-EdXDIiW-B2TSqOnbjABEtVD6JIlwcDwEBmvGaqHzrtyNRPv2cWnPW6F3YvZHOPD5Vsp2liWIvM", "auth": "rLK_-YxYrbeYhHxrr7FYEQ" } },
  //kianosh
  { "endpoint": "https://fcm.googleapis.com/fcm/send/cpNcZql6nlY:APA91bEwmU7LN2Cb90sH2dgjuPUH_UnxFaCFp-IiXCrSXzAKf1HTLYKmNuwC3QuvPlrbrtE6twhrWijATVQGnIvqC67W6vlGzj2irG93DWHTlOhiW21sO8vth1ZFD2MEO74DMiYDRoZ7", "expirationTime": null, "keys": { "p256dh": "BLOBaVBX1a5MIpUzKWYGys-lw1dipOuNG_wG9cswwE6CIeI9De3d22cJsS61vH_xsKdJ818GyZq6VFldICsPL4M", "auth": "vZp4flWYhts1g0O1G41FBw" } }
]
for (let i = 0; i < pushSubscription.length; i++) {
  webpush.sendNotification(pushSubscription[i], `{
    "name": "ali",
    "body": "ali salm "
  }`);
}
