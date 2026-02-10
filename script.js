:not(:defined) > * {
  display: none;
}

body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: transparent; /* Делаем фон страницы прозрачным */
}

model-viewer {
  width: 100%;
  height: 100vh;
  background-color: transparent; /* Делаем фон вьюера прозрачным */
  --poster-color: transparent;
}

/* Стили из твоего файла для кнопок и прогресс-бара */
.progress-bar {
  display: block;
  width: 33%;
  height: 2%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  border-radius: 25px;
  box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.5);
}

.progress-bar.hide { visibility: hidden; transition: visibility 0.3s; }

.update-bar {
  background-color: rgba(255, 255, 255, 0.9);
  width: 0%;
  height: 100%;
  border-radius: 25px;
  transition: width 0.3s;
}

#ar-button {
  background-color: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 16px;
  padding: 0px 16px;
  font-family: Roboto Regular, Helvetica Neue, sans-serif;
  font-size: 14px;
  color:#4285f4;
  height: 36px;
  line-height: 36px;
  border-radius: 18px;
  border: 1px solid #DADCE0;
  cursor: pointer;
}