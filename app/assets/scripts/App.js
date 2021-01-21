import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import TechFeatures from './modules/TechFeatures';
import { particles, ParticlesOverlay } from './modules/particles';
import { config } from './modules/particlesjs-config';
import toggleHeader from './modules/toggleHeader';

window.addEventListener('load', function () {
  console.log('Window loaded!');
  window.setTimeout(function () {
    document
      .getElementById('banner')
      .classList.remove('large-hero--is-preload');
  }, 100);
});

window.addEventListener('scroll', toggleHeader);

particles('banner', config);
const particlesOverlay = new ParticlesOverlay('banner', 'banner-overlay');
const mobileMenu = new MobileMenu();
const revealOnScroll = new RevealOnScroll();
const projectOneFeatures = new TechFeatures(
  'p1-tech-icons',
  'p1-tech-features'
);
const projectTwoFeatures = new TechFeatures(
  'p2-tech-icons',
  'p2-tech-features'
);
