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
// const pushSubscription = { "endpoint": "https://fcm.googleapis.com/fcm/send/f7bEXjpKBeY:APA91bEfl1FV2xWeGEYWtnC2HxFjQXp8blYEXGNmNopqa2FVgHTNkzS2iChGxsrYrdU1xF_UaNPs6ftgKI846fxcdpAJBpXbMfOmpWDxL8WeYkOCcBKEeHuDv7CwAvSmQjMgwfWpv8Yt", "expirationTime": null, "keys": { "p256dh": "BBiZbZaeOHS6u_ZeOPgMit5b5GeEQ4_2-7A6NMG5Tcj9w40MND0qGhpicBTy1cyCBxhS4YQ1FKXeK8kqP4DNEZ0", "auth": "NSlxgx3QWkNdym6iHkpeCQ" } }
const pushSubscription = { "endpoint": "https://fcm.googleapis.com/fcm/send/f-Ni8HCxUK4:APA91bHx8Lh0PDJVZTp7u4wFghiQmhSDvhLZ3fu_DPXtDWTVWJkPOkANHI3cKL7tNHFzirk91fX2NpjSharSmL_T91N5CbyivQBpM6oPnLwyFWaGw8YlLDQ4DgFrFVEX7psz5wjDbhvx", "expirationTime": null, "keys": { "p256dh": "BHw_ZXeiz3gF34kLY7HSCr_j23BMYJARXTCYwN8Ub5wcGlFXOhASBg0boioomo0ZbssnTM2r-30TjlaK2xgSpjQ", "auth": "XTQUdJATUL97jY-yZ8ghDQ" } }

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
