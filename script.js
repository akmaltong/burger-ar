const modelViewer = document.querySelector('#burger-model');

const urlParams = new URLSearchParams(window.location.search);
const modelName = urlParams.get('model');

if (modelName) {
    modelViewer.src = `${modelName}.glb`;
    modelViewer.poster = `${modelName}.webp`;
}

const debugLogs = [];

function addLog(type, message, detail = {}) {
    debugLogs.push({
        timestamp: new Date().toISOString(),
        type,
        message,
        detail
    });
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

document.querySelector('#show-debug-logs').addEventListener('click', () => {
    const logText = debugLogs.map(log => {
        return `[${log.timestamp}] [${log.type}] ${log.message} ${JSON.stringify(log.detail)}`;
    }).join('\n');
    
    // Attempt to open in a new window for easier copying, or fallback to alert
    const newWindow = window.open();
    if (newWindow) {
        newWindow.document.write(`<pre>${logText}</pre>`);
        newWindow.document.title = 'Debug Logs';
    } else {
        alert('Debug Logs:\n\n' + logText);
    }
});