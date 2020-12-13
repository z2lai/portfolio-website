import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import { particles, ParticlesOverlay } from './modules/particles';
import { config } from './modules/particlesjs-config';

particles('particles-js', config);
const particlesOverlay = new ParticlesOverlay('particles-js', 'particles-js-overlay')
const mobileMenu = new MobileMenu();
const revealOnScroll = new RevealOnScroll();

