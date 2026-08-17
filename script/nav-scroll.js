./ https:./www.youtube.com/watch?v=Q_XZk5Vnujw

{
    const nav = document.querySelector(".nav");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
            nav.classList.add("nav--hidden")
        } else {
            nav.classList.remove("nav--hidden")
        }

        lastScrollY = window.scrollY; 
    });
}