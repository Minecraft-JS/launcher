let loadTime;

function sendLoadTime(time) {
  window.parent.postMessage(
      {
        frameType: 'background-image',
        messageType: 'loaded',
        url: location.href,
        time: time,
      },
      'launcher.html');
}

function onImageLoad() {
  document.body.toggleAttribute('shown', true);
  loadTime = Date.now();
  sendLoadTime(loadTime);
}

window.addEventListener('message', ({data}) => {
  if (data === 'sendLoadTime' && loadTime) {
    sendLoadTime(loadTime);
  }
});
