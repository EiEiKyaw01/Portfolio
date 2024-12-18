import './main.css';

var effect = ScrollReveal({
  distance: '60px',
  duration: 2500,
  origin: 'left',
  delay: 100
});

effect.reveal('#hero-section', {
  origin: 'top',
});

effect.reveal("#aboutMe", {
  viewFactor: 0.2,
});

effect.reveal('#skills', {
  viewFactor: 0.2,
});

effect.reveal('#project-section', {
  viewFactor: 0.2,
});

effect.reveal('#contact-me', {
  viewFactor: 0.2,
});

