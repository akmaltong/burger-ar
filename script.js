const modelViewer = document.querySelector("#burger-model");

// Смена моделей по QR-параметру
const urlParams = new URLSearchParams(window.location.search);
const modelName = urlParams.get('model');
if (modelName) {
    modelViewer.src = `${modelName}.glb`;
    modelViewer.poster = `${modelName}.webp`;
}

// Обработка ошибок запуска AR
modelViewer.addEventListener('ar-status', (event) => {
    if(event.detail.status === 'failed'){
        const error = document.querySelector("#error");
        error.classList.add('show');
        setTimeout(() => error.classList.remove('show'), 3000);
    }
});

// Прогресс загрузки
modelViewer.addEventListener('progress', (event) => {
    const progressBar = document.querySelector(".progress-bar");
    const updatingBar = document.querySelector(".update-bar");
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
        progressBar.classList.add("hide");
    }
});
