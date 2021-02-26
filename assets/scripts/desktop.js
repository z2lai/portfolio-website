import { particles, ParticlesOverlay } from './modules/particles';
import { config } from './modules/particlesjs-config';
import isMobileDevice from './utils/isMobileDevice';
import toggleHeader from './modules/toggleHeader';
import TechFeatures from './modules/TechFeatures';

import SimpleBar from 'simplebar';

window.addEventListener('load', function () {
  document.getElementById('banner').classList.remove('is-preload');
});

window.addEventListener('scroll', toggleHeader);

if (!isMobileDevice()) {
  particles('banner', config);
  const particlesOverlay = new ParticlesOverlay('banner', 'repulse-div');
}

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
