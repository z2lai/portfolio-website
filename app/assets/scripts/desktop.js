import { particles, ParticlesOverlay } from './modules/particles';
import { config } from './modules/particlesjs-config';
import addScrollbar from './modules/addScrollbar';
import isMobileDevice from './utils/isMobileDevice';
import TechFeatures from './modules/TechFeatures';
import toggleHeader from './modules/toggleHeader';

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

addScrollbar('iphone-x-content');
