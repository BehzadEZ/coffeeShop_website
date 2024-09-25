var slideindex = 1;
showslide(slideindex);
function showslide(n) {
  let slides = document.getElementsByClassName("div-text-header");
  if (n > slides.length) {
    slideindex = 1;
  }
  if (n < 1) {
    slideindex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideindex - 1].style.display = "block";
}

function controlSlide(n) {
  slideindex += n;
  showslide(slideindex);
}

function controlSlide2(n) {
  slideindex += n;
  showslide(slideindex);
  document.getElementById("img-text-head1").animate(
    [
      // key frames
      { transform: "translateX(172%)" },
      { transform: "translateX(37%)" },
    ],
    {
      // sync options
      duration: 1000,
      iterations: 1,
    }
  );

  document.getElementById("img-text-head2").animate(
    [
      // key frames
      { transform: "translateX(172%)" },
      { transform: "translateX(37%)" },
    ],
    {
      // sync options
      duration: 1000,
      iterations: 1,
    }
  );

  document.getElementById("img-text-head3").animate(
    [
      // key frames
      { transform: "translateX(165%)" },
      { transform: "translateX(37%)" },
    ],
    {
      // sync options
      duration: 1000,
      iterations: 1,
    }
  );
}
var interval = setInterval(() => {
  slideindex++;
  showslide(slideindex);
}, 4000);

function startInterval() {
  interval = setInterval(() => {
    slideindex++;
    showslide(slideindex);
  }, 4000);
}

function stopInterval() {
  clearInterval(interval);
}

//! dark mode func

function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
