document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    alert(img.dataset.frase);
  });
});
