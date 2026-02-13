const modelViewer = document.querySelector('#burger-model');

const urlParams = new URLSearchParams(window.location.search);
const modelName = urlParams.get('model');

if (modelName) {
    modelViewer.src = `${modelName}.glb`;
    modelViewer.poster = `${modelName}.webp`;
}

function addLog(type, message, detail = {}) {
    console.log(`[${type}] ${message}`, detail);
}

modelViewer.addEventListener('progress', (event) => {
    const progressBar = document.querySelector('.progress-bar');
    const updatingBar = document.querySelector('.update-bar');
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
        progressBar.classList.add('hide');
    }
    addLog('progress', 'Model loading progress', { progress: event.detail.totalProgress });
});

modelViewer.addEventListener('ar-status', (event) => {
    addLog('ar-status', `AR Status changed: ${event.detail.status}`, { status: event.detail.status, error: event.detail.error });
});

window.onerror = (message, source, lineno, colno, error) => {
    addLog('error', 'Unhandled error', { message, source, lineno, colno, error: error ? error.stack : 'N/A' });
};

window.onunhandledrejection = (event) => {
    addLog('unhandledrejection', 'Unhandled promise rejection', { reason: event.reason ? event.reason.stack : event.reason });
};
