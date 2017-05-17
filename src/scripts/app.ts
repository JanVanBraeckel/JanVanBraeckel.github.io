import { TxtType } from './TxtType';

window.onload = () => {
  const elements = document.getElementsByClassName('typewriter');
  for (let i = 0; i < elements.length; i++) {
    let toRotate = elements[i].getAttribute('data-type');
    const period = elements[i].getAttribute('data-period');
    if (toRotate) {
      toRotate = toRotate.replace(/'/g, '"');
      const txtType = new TxtType(elements[i], JSON.parse(toRotate), period);
      txtType.tick();
    }
  }
};
