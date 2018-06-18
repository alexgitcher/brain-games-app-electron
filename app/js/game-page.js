const electron = require('electron'),
  ipcRenderer = electron.ipcRenderer,
  currentWindow = electron.remote.getCurrentWindow();

document.addEventListener('DOMContentLoaded', () => {

  const gameTitle = currentWindow.gameTitle,
    gameRule = currentWindow.gameRule,
    gameTitleNode = document.getElementById('game-title'),
    gameRuleNode = document.getElementById('game-rule'),
    backToGamesBtn = document.getElementById('back-to-games'),
    closeBtn = document.getElementById('close'),
    game = document.querySelector('.game');

  game.classList.remove('game--hidden');
  document.title = gameTitle;
  gameTitleNode.textContent = gameTitle;
  gameRuleNode.textContent = gameRule;

  backToGamesBtn.addEventListener('click', () => {
    ipcRenderer.send('open-start-page');
  });

  closeBtn.addEventListener('click', () => {
    ipcRenderer.send('close-window');
  });
});