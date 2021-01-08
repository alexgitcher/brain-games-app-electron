document.addEventListener('DOMContentLoaded', () => {

  const gameTitle = window.currentWindow.gameTitle;
  const gameRule = window.currentWindow.gameRule;
  const gameTitleNode = document.getElementById('game-title');
  const gameRuleNode = document.getElementById('game-rule');
  const backToGamesBtn = document.getElementById('back-to-games');
  const closeBtn = document.getElementById('close');
  const game = document.querySelector('.game');

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
