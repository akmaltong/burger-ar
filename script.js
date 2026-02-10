const modelViewer = document.querySelector('#burger-model');

// Поддержка QR-ссылок: ?model=ИмяФайла
const urlParams = new URLSearchParams(window.location.search);
const modelName = urlParams.get('model');

if (modelName) {
    modelViewer.src = `${modelName}.glb`;
    modelViewer.poster = `${modelName}.webp`;
}

// Полоска загрузки
modelViewer.addEventListener('progress', (event) => {
  const progressBar = document.querySelector('.progress-bar');
  const updatingBar = document.querySelector('.update-bar');
  const progress = event.detail.totalProgress;
  
  updatingBar.style.width = `${progress * 100}%`;
  
  if (progress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
  }
});
