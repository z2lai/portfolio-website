import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import TechFeatures from './modules/TechFeatures';
import { particles, ParticlesOverlay } from './modules/particles';
import { config } from './modules/particlesjs-config';
import toggleHeader from './modules/toggleHeader';
import SimpleBar from 'simplebar';

import isMobileDevice from './utils/isMobileDevice';

window.addEventListener('load', function () {
  console.log('Window loaded!');
  window.setTimeout(function () {
    document.getElementById('banner').classList.remove('is-preload');
  }, 100);
});

window.addEventListener('scroll', toggleHeader);

if (!isMobileDevice()) {
  particles('banner', config);
  const particlesOverlay = new ParticlesOverlay('banner', 'repulse-div');
}
// const mobileMenu = new MobileMenu();
// const revealOnScroll = new RevealOnScroll();
const projectOneFeatures = new TechFeatures(
  'p1-tech-icons',
  'p1-tech-features'
);
const projectTwoFeatures = new TechFeatures(
  'p2-tech-icons',
  'p2-tech-features'
);

const scrollbar = new SimpleBar(document.getElementById('iphone-x-content'));

const scrollElement = scrollbar.getScrollElement();
const hideScrollChevrons = function () {
  console.log(scrollElement.scrollTop);
  if (scrollElement.scrollTop >= 200) {
    const scrollChevrons = document.getElementsByClassName('js-scroll-chevron');
    scrollChevrons.forEach((el) => {
      el.style.animationIterationCount = '1';
    });
    scrollElement.removeEventListener('scroll', hideScrollChevrons);
  }
};
scrollElement.addEventListener('scroll', hideScrollChevrons);
