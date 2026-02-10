const modelViewer = document.querySelector('model-viewer');

// 1. Получаем имя модели из ссылки (например, ?model=CheeseBurger)
const urlParams = new URLSearchParams(window.location.search);
const modelName = urlParams.get('model');

// 2. Если имя указано, подставляем нужные файлы
if (modelName) {
    modelViewer.src = `${modelName}.glb`;
    modelViewer.iosSrc = `${modelName}.usdz`;
    modelViewer.poster = `${modelName}.webp`;
}

// 3. Обработка полоски загрузки
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
