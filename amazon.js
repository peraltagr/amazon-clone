const images = document.querySelectorAll('.header-slider ul img');
const prevBtn = document.querySelector('.control-previous');
const nextBtn = document.querySelector('.control-next');

let n = 0;

function changeSlide() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  images[n].style.display = 'block'
}

changeSlide()

prevBtn.addEventListener('click', (e)=> {
  if (n > 0) {
    n--;
  } else {
    n = images.length -1;
  }
  changeSlide()
})

nextBtn.addEventListener('click', (e)=> {
  if (n < images.length -1) {
    n++;
  } else {
    n = 0
  }
  changeSlide()
})

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
  item.addEventListener('wheel', (e)=> {
    e.preventDefault();
    item.scrollLeft += e.deltaY;
  });
}
