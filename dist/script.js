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

  function disableAOSonLayanan() {
      const layananElements = document.querySelectorAll(".layanan [data-aos]");

      if (window.innerWidth < 768) {
          // Matikan efek AOS khusus elemen di dalam .layanan
          layananElements.forEach(el => {
              el.setAttribute("data-aos", ""); // kosongkan
              el.setAttribute("data-aos-duration", "0");
          });
      } else {
          // Kembalikan AOS jika layar besar
          layananElements.forEach(el => {
              // Atur kembali efek default sesuai isi HTML-mu
              if (!el.dataset.originalAos) {
                  el.dataset.originalAos = el.getAttribute("data-aos-default");
              }
              el.setAttribute("data-aos", el.dataset.originalAos || "fade-up");
          });
      }

      // Re-init agar AOS membaca ulang perubahan
      AOS.refresh();
  }

  // Simpan data-aos asli di elemen layanan (satu kali)
  document.querySelectorAll(".layanan [data-aos]").forEach(el => {
      el.dataset.originalAos = el.getAttribute("data-aos");
  });

  // Jalankan saat load
  disableAOSonLayanan();

  // Jalankan lagi saat resize
  window.addEventListener("resize", disableAOSonLayanan);



