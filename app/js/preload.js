const { ipcRenderer, remote } = require('electron');

const currentWindow = remote.BrowserWindow.getFocusedWindow();

window.currentWindow = currentWindow;

window.openGame = (gameId, gameTitle) => {
  ipcRenderer.send('open-game-page', gameId, gameTitle);
}
window.openStartPage = () => ipcRenderer.send('open-start-page');

window.closeApp = () => ipcRenderer.send('close-window');
