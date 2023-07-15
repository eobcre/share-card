import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.display = 'block';

  const app = document.getElementById('app');
  const button = document.getElementById('button');

  if (app && button) {
    button.addEventListener('click', () => {
      app.style.display = 'none';
    });
  }
});
