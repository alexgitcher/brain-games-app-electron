const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow(
    {
      width: 800,
      height: 600,
      frame: false,
      resizable: false,
      webPreferences: {
        preload: path.join(__dirname, './app/js/preload.js'),
        enableRemoteModule: true
      }
    }
  );

  mainWindow.loadFile('app/index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.gameRules = {
    "game-even": "Answer 'yes' if number is even otherwise the answer is 'no'.",
    "game-calc": "What is the result of the expression?",
    "game-gcd": "Find the greatest common divisor of given numbers.",
    "game-balance": "Balance the given number.",
    "game-progression": "What number is missing in this progression?",
    "game-prime": "Is this number prime?"
  };

  mainWindow.gameRule = '';
  mainWindow.gameTitle = '';
  mainWindow.gameId = '';
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('open-game-page', (event, gameId, gameTitle) => {
  mainWindow.gameId = gameId;
  mainWindow.gameRule = mainWindow.gameRules[gameId];
  mainWindow.gameTitle = gameTitle;
  mainWindow.loadFile('app/game.html');
});

ipcMain.on('open-start-page', () => {
  mainWindow.loadFile('app/index.html');
});

ipcMain.on('close-window', () => {
  app.quit();
});
