const modelViewer = document.querySelector('#burger-model');

// 1. Динамическая подгрузка модели из URL (например, ?model=Hamburger2)
const urlParams = new URLSearchParams(window.location.search);
const modelName = urlParams.get('model');

if (modelName) {
    modelViewer.src = `${modelName}.glb`;
    modelViewer.poster = `${modelName}.webp`;
}

// 2. ФИКС ВЫЛЕТОВ: Принудительный Scene Viewer
modelViewer.addEventListener('load', () => {
    // Явно указываем использовать нативное приложение
    modelViewer.arModes = "scene-viewer";
});

// 3. Индикатор прогресса
modelViewer.addEventListener('progress', (event) => {
    const progressBar = document.querySelector('.progress-bar');
    const updatingBar = document.querySelector('.update-bar');
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
        progressBar.classList.add('hide');
    }
});
