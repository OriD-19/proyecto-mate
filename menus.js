let open = false;
let showContent = false;
let slideNumber = 0;
let slideNumberSin = 0;
let slideNumberCos = 0;
let slideNumberEx = 0;

showSlides(slideNumberEx, ".slideDiff");

function displayExamples(open, showContent, disp, cont, slideSelector) {
  let content = document.getElementById(cont);
  const displayable = document.getElementById(disp);
  if (open === false && !showContent) {
    displayable.style.height = "27rem";
    open = !open;
    setTimeout(() => {
      showContent = true;
      content.style.display = "flex";
      showSlides(slideNumber, slideSelector);
    }, 299);
  } else {
    displayable.style.height = "0";
    open = !open;
    showContent = false;
    content.style.display = "none";
  }
}

function showSlides(n, slideSelector) {
  let slides = document.querySelectorAll(slideSelector);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

function forwardSlide(contentType, slideName) {
  let slides = document.querySelectorAll(slideName);
  switch (contentType) {
    case "sin":
      if (slideNumberSin < slides.length - 1) {
        slideNumberSin++;
      } else {
        slideNumberSin = 0;
      }
      showSlides(slideNumberSin, slideName);
      break;
    case "cos":
      if (slideNumberCos < slides.length - 1) {
        slideNumberCos++;
      } else {
        slideNumberCos = 0;
      }
      showSlides(slideNumberCos, slideName);
      break;
    case "ex":
      if (slideNumberEx < slides.length - 1) {
        slideNumberEx++;
      } else {
        slideNumberEx = 0;
      }
      showSlides(slideNumberEx, slideName);
      break;
  }
}

function returnSlide(contentType, slideName) {
  let slides = document.querySelectorAll(slideName);
  switch (contentType) {
    case "sin":
      if (slideNumberSin > 0) {
        slideNumberSin--;
      } else {
        slideNumberSin = slides.length - 1;
      }
      showSlides(slideNumberSin, slideName);
      break;

    case "cos":
      if (slideNumberCos > 0) {
        slideNumberCos--;
      } else {
        slideNumberCos = slides.length - 1;
      }
      showSlides(slideNumberCos, slideName);
      break;

    case "ex":
      if (slideNumberEx > 0) {
        slideNumberEx--;
      } else {
        slideNumberEx = slides.length - 1;
      }
      showSlides(slideNumberEx, slideName);
      break;
  }
}
