function openWhatsApp() {
  let phone = "919028292763"; // 🔴 replace with your real number
  let message = "Hi, I want more information about your courses.";

  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
