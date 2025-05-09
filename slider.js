  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider img');
  let index = 0;

  setInterval(() => {
    index = (index + 1) % slides.length;
    slider.scrollTo({
      left: index * slider.clientWidth,
      behavior: 'smooth'
    });
  }, 3000); // troca a cada 3 segundos
