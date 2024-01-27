self.addEventListener('push', function (e) {
  const data = e.data.json()
  var options = {
    body: data.body,
    vibrate: [100, 50, 100],
    data: {
      dataOfArrival: Date.now(),
      primaryKey: '2'
    }
  }
  self.registration.showNotification('Hello world!', options);
  // self.ServiceWorkerRegistration.showNotification('hellomamad', options)
})
