import './main.css';

var effect = ScrollReveal({
  distance: '60px',
  duration: 2500,
});

effect.reveal('#hero-section', {
  origin: 'top',
  delay: 0
});

effect.reveal("#aboutMe", {
  origin: "left",
  viewFactor: 0.5,
  delay: 500,
});

effect.reveal('#skills', {
  origin: 'right',
  viewFactor: 0.5,
  delay: 500
});

effect.reveal('#project-section', {
  origin: 'left',
  viewFactor: 0.3,
  delay: 500
});

effect.reveal('#contact-me', {
  origin: 'right',
  viewFactor: 0.2,
  delay: 500
});

