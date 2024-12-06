import './main.css';

var effect = ScrollReveal({
  distance: '60px',
  duration: 2500,
  origin: 'left'
});

effect.reveal('#hero-section', {
  origin: 'top',
  delay: 0
});

effect.reveal("#aboutMe", {
  viewFactor: 0.5,
  delay: 500,
});

effect.reveal('#skills', {
  viewFactor: 0.5,
  delay: 500
});

effect.reveal('#project-section', {
  viewFactor: 0.3,
  delay: 500
});

effect.reveal('#contact-me', {
  viewFactor: 0.2,
  delay: 500
});

