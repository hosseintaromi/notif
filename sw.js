self.addEventListener('push', () => {
  console.log('first')
  self.registration.showNotification('Hello world!');
});
