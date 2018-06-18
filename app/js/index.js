const ipcRenderer = require('electron').ipcRenderer;

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-game'),
    closeBtn = document.getElementById('close');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const target = event.target,
        gameId = target.id,
        gameTitle = target.dataset.title;
      ipcRenderer.send('open-game-page', gameId, gameTitle);
    });
  });

  closeBtn.addEventListener('click', () => {
    ipcRenderer.send('close-window');
  });
});