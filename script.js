const modelViewer = document.querySelector('#burger-model');

// Поддержка смены бургеров из твоего меню
const urlParams = new URLSearchParams(window.location.search);
const burgerId = urlParams.get('burger'); // теперь ловим ?burger=1 и т.д.

// Карта моделей
const models = {
    '0': 'Burger.glb',
    '1': 'Big Burger.glb',
    '2': 'Zinger burger.glb',
    '3': 'Hamburger.glb',
    '4': 'Hamburger2.glb',
    '5': 'Burger low.glb'
};

if (burgerId && models[burgerId]) {
    modelViewer.src = models[burgerId];
}

// ПРИНУДИТЕЛЬНО отключаем WebXR для стабильности
modelViewer.addEventListener('load', () => {
    modelViewer.arModes = "scene-viewer";
});

modelViewer.addEventListener('progress', (event) => {
    const progressBar = document.querySelector('.progress-bar');
    const updatingBar = document.querySelector('.update-bar');
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
        progressBar.classList.add('hide');
    }
});
