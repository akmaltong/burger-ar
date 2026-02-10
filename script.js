const modelViewer = document.querySelector('#burger-model');

// Магия смены модели через URL
const urlParams = new URLSearchParams(window.location.search);
const modelName = urlParams.get('model');

if (modelName) {
    // Если в ссылке есть ?model=название, меняем файлы
    modelViewer.src = `${modelName}.glb`;
    modelViewer.iosSrc = `${modelName}.usdz`; 
    modelViewer.poster = `${modelName}.webp`;
}

// Полоска загрузки
modelViewer.addEventListener('progress', (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
  }
});