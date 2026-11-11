document.addEventListener("DOMContentLoaded", function () {

  // แสดงปีปัจจุบันในส่วนท้ายเว็บไซต์
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ปุ่มกลับไปด้านบน
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {

    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

  }

});
