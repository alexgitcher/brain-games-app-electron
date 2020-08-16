document.addEventListener('DOMContentLoaded', () => {

  const gameTitle = window.currentWindow.gameTitle,
    gameRule = window.currentWindow.gameRule,
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
    window.openStartPage();
  });

  closeBtn.addEventListener('click', () => {
    window.closeApp();
  });
});
