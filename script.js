const modelViewer = document.querySelector('#burger-model');

const urlParams = new URLSearchParams(window.location.search);
const modelName = urlParams.get('model');

if (modelName) {
    modelViewer.src = `${modelName}.glb`;
    modelViewer.poster = `${modelName}.webp`;
}

modelViewer.addEventListener('progress', (event) => {
  const progressBar = document.querySelector('.progress-bar');
  const updatingBar = document.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  }
});

modelViewer.addEventListener('ar-status', (event) => {
  console.log('AR Status:', event.detail.status);
});