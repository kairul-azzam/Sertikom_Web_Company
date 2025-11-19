const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () =>{
    const posisi = window.scrollY > 0
    navbar.classList.toggle("scrolling-active", posisi)
})

