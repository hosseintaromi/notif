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
const pushSubscription = { "endpoint": "https://fcm.googleapis.com/fcm/send/cJH1Mkuragg:APA91bF9MXhdQYfRJgBJeK1nPlJbElQT6VgeBXC-hWmgSpXk-EVjm7VbtRoB4fploth_OM7NqbOmt06N8Ql3Ow3TTjgEzJtgtCoOHJDfY-9nIVSwiLOGYvS6awFC8Tn51xZjykLKjz5K", "expirationTime": null, "keys": { "p256dh": "BEl5XPfwkbDdtbMVYZkBPGvx0PGj9vKJ-ni5Tfwe7obX7dE3mvCuiVTxbtcWoBIU1FP-FhvNye-Q5XGbRpBTars", "auth": "RS6OT4uz_2CWfvWu5CnjgQ" } }

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
