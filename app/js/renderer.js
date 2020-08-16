document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-game'),
    closeBtn = document.getElementById('close'),
    app = document.querySelector('.app');

    app.classList.remove('app--hidden');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const target = event.target,
        gameId = target.id,
        gameTitle = target.dataset.title;
        window.openGame(gameId, gameTitle);
    });
  });

  closeBtn.addEventListener('click', () => {
    window.closeApp();
  });
});
