import './main.css';

var effect = ScrollReveal({
  distance: '60px',
  duration: 2500,
});

effect.reveal('#hero-section', {
  origin: 'top',
  delay: 0
});

effect.reveal('#skills', {
  origin: 'left',
  viewFactor: 0.3,
  delay: 500
});

effect.reveal('#project-section', {
  origin: 'right',
  viewFactor: 0.3,
  delay: 500
});

effect.reveal('#contact-me', {
  origin: 'bottom',
  viewFactor: 0.3,
  delay: 500
});

