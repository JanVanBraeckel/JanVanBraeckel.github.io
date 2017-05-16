const words = document.querySelectorAll('.words > span');

const reset = () => lettersAnimation();

const lettersAnimation = () => {
  [].slice.call(words).forEach((word, i) => {
    const letters = word.querySelectorAll('i');
    const timeout = i === 0 ? 0 : [].slice.call(words).slice(0, i).reduce((prevVal, el) => {
      return prevVal + ((el.querySelectorAll('i').length - 1) * 100);
    }, 0);

    setTimeout(() => {
      [].slice.call(words).forEach((w) => {
        if (w !== word) {
          w.classList.add('hidden');
        }
      });
      word.classList.remove('hidden');
      [].slice.call(letters).forEach((letter, j) => {
        setTimeout(() => {
          letter.classList.remove('out');
          if (words[words.length - 1] === word && letters[letters.length - 1] === letter) {
            setTimeout(function () {
              reset();
            }, 1000);
          }
          if(letters[letters.length -1] === letter){
            setTimeout(function() {
              [].slice.call(letters).forEach((l) => l.classList.add('out'));
            }, 1000);
          }
        }, j * 100);
      });
    }, timeout + (i * 1000));
  });
};

lettersAnimation();

// document.querySelectorAll('.words > span').forEach((word, i) => {
//   let letters = word.querySelectorAll('i');
//   setTimeout(function () {
//   }, i * (letters.length - 1) * 100);
// });

// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
// }

// for (let i = 0; i < is.length; i++) {
//   let el = is[i];
//   words[0].classList.remove('hidden');
//   setTimeout(() => {
//     el.classList.remove('out');
//     el.classList.add('in');
//   }, i * 100);
// }