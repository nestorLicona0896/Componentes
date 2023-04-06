const loginRegisterSection = document.querySelector('.login-register');

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  loginRegisterSection.style.transform = `translateY(-${scrollPosition/25 }%)`;
});
