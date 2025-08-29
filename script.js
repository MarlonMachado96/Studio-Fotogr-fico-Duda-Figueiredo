// Seleciona todas as imagens clicáveis
const images = document.querySelectorAll('.clickable-img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const close = document.getElementsByClassName('close')[0];

images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Fechar modal
close.addEventListener('click', () => {
    modal.style.display = "none";
});

// Fechar clicando fora da imagem
modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = "none";
    }
});
