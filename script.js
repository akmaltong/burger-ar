const marker = document.querySelector('#burger-marker');
const entity = document.querySelector('#burger-entity');
const hint = document.querySelector('#hint');
const nameLabel = document.querySelector('#burger-name');

// Читаем название бургера из URL (если есть)
const params = new URLSearchParams(window.location.search);
const burgerId = params.get('burger') || "Hamburger 2";
nameLabel.textContent = burgerId;

// Логика обнаружения маркера как в твоем проекте
marker.addEventListener('markerFound', () => {
    hint.classList.add('hidden');
    console.log("Маркер найден");
});

marker.addEventListener('markerLost', () => {
    hint.classList.remove('hidden');
    console.log("Маркер потерян");
});

// Функции управления
let rotating = false;
function toggleRotation() {
    rotating = !rotating;
    if (rotating) {
        entity.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 4000; easing: linear');
    } else {
        entity.removeAttribute('animation');
    }
}

function changeScale(factor) {
    const currentScale = entity.getAttribute('scale');
    entity.setAttribute('scale', {
        x: currentScale.x * factor,
        y: currentScale.y * factor,
        z: currentScale.z * factor
    });
}
