const toggleHeader = () => {
  const header = document.getElementsByClassName('site-header')[0];
  const headerRect = header.getBoundingClientRect();
  const scrollYCriteria = window.innerHeight - headerRect.height;
  if (window.pageYOffset >= scrollYCriteria) {
    header.classList.add('site-header--is-translucent');
    header.classList.remove('site-header--is-hidden');
  } else if (window.pageYOffset >= headerRect.height) {
    header.classList.add('site-header--is-hidden');
    header.classList.remove('site-header--is-translucent');
  } else {
    header.classList.remove('site-header--is-translucent');
    header.classList.remove('site-header--is-hidden');
  }
};

export default toggleHeader;
