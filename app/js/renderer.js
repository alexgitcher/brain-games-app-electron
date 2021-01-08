document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-game');
  const closeBtn = document.getElementById('close');
  const app = document.querySelector('.app');

  app.classList.remove('app--hidden');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const { target } = event;
      const { id } = target;
      const { title } = target.dataset;

      window.openGame(id, title);
    });
  });

  closeBtn.addEventListener('click', () => {
    window.closeApp();
  });
});
