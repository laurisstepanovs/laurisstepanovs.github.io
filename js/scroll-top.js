window.onscroll = scroll1;

function scroll1() {
  var toTop = document.getElementById('toTop');
  window.scrollY > 0 ? toTop.style.display = 'block' : toTop.style.display = 'none';
}

function scrollTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
}

document.getElementById("toTop").addEventListener("click", scrollTop);