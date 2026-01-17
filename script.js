const paintImg = document.getElementById("paintImg");
const paintHover = document.getElementById("paintHover")

paintHover.addEventListener('click', () => {
    paintImg.classList.toggle('hide');
});