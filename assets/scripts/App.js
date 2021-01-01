import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import { particles, ParticlesOverlay } from './modules/particles';
import { config } from './modules/particlesjs-config';

window.addEventListener('load', function(){
  console.log('Window loaded!');
  window.setTimeout(function() {
    document.getElementById('banner').classList.remove('large-hero--is-preload');
  }, 100);
});

particles('banner', config);
const particlesOverlay = new ParticlesOverlay('banner', 'banner-overlay')
const particlesOverlayButton = new ParticlesOverlay('banner', 'banner-overlay-button')
const mobileMenu = new MobileMenu();
const revealOnScroll = new RevealOnScroll();
