const modelViewer = document.querySelector('model-viewer');

// Получаем имя модели из URL параметра ?model=...
const urlParams = new URLSearchParams(window.location.search);
const modelName = urlParams.get('model');

if (modelName) {
    // Если в ссылке есть ?model=Burger1, меняем файлы
    modelViewer.src = `${modelName}.glb`;
    modelViewer.iosSrc = `${modelName}.usdz`;
    modelViewer.poster = `${modelName}.webp`;
}

// Управление полоской загрузки
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
  }
};

modelViewer.addEventListener('progress', onProgress);
