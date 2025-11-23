const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () =>{
    const posisi = window.scrollY > 0
    navbar.classList.toggle("scrolling-active", posisi)
})

const container4 = document.querySelector('.container4');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})
