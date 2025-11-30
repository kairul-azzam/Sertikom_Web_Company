const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () =>{
    const posisi = window.scrollY > 0
    navbar.classList.toggle("scrolling-active", posisi)
})

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault(); // mencegah submit default

    let name    = document.getElementById("name");
    let email   = document.getElementById("email");
    let message = document.getElementById("message");
    let formMsg = document.getElementById("formMsg");

    // regex email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // reset pesan error
    formMsg.innerHTML = "";
    formMsg.style.color = "#ff4d4d";

    // validasi kosong
    if(name.value.trim() === ""){
        formMsg.innerHTML = "Nama tidak boleh kosong.";
        name.focus();
        return false;
    }

    if(email.value.trim() === ""){
        formMsg.innerHTML = "Email tidak boleh kosong.";
        email.focus();
        return false;
    }

    // validasi format email
    if(!email.value.match(emailPattern)){
        formMsg.innerHTML = "Format Email tidak valid.";
        email.focus();
        return false;
    }

    if(message.value.trim() === ""){
        formMsg.innerHTML = "Pesan tidak boleh kosong.";
        message.focus();
        return false;
    }

    // jika valid
    formMsg.style.color = "#28b463";
    formMsg.innerHTML = "Pesan berhasil dikirim. Kami akan menghubungi Anda segera.";

    // reset form setelah sukses
    name.value = "";
    email.value = "";
    message.value = "";
});

  



