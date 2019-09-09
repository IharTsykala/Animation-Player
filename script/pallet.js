// 1. paint bucket tool functionality

// 2 transform tool

// Palette

const arrChooseColor = ['color-green', 'color-grey', 'color-red', 'color-blue'];

const palette = document.querySelector('.palette-ruler-color');

function addTornOnPalette() {
  for (let i = 0; i < palette.children.length; i += 1) {
    palette.children[i].classList.remove('tornOn');
  }
  this.classList.add('tornOn');
}

const bucket = document.querySelector('.paint-bucket');
bucket.addEventListener('click', addTornOnPalette);

const chooseColor = document.querySelector('.choose-color');
chooseColor.addEventListener('click', addTornOnPalette);

const move = document.querySelector('.move');
move.addEventListener('click', addTornOnPalette);

const transform = document.querySelector('.transform');
transform.addEventListener('click', addTornOnPalette);

// Canvas

// 3. color picker tool

// Colors

const currentColor = document.querySelector('.current-color');

const prevColor = document.querySelector('.prev-color');

const firstColor = document.querySelector('.first-color');

const secondColor = document.querySelector('.second-color');

function chooseCurentColor() {
  if (chooseColor.className.indexOf('tornOn') !== -1) {
    if (this.classList.contains(arrChooseColor[1])) {
      currentColor.classList.remove(arrChooseColor[0]);
      prevColor.classList.remove(arrChooseColor[1]);

      const buf1 = arrChooseColor[0];
      const buf2 = arrChooseColor[1];

      arrChooseColor[0] = buf2;
      arrChooseColor[1] = buf1;

      currentColor.classList.add(arrChooseColor[0]);
      prevColor.classList.add(arrChooseColor[1]);
    }

    if (this.classList.contains(arrChooseColor[2])) {
      currentColor.classList.remove(arrChooseColor[0]);
      prevColor.classList.remove(arrChooseColor[1]);
      firstColor.classList.remove(arrChooseColor[2]);

      const buf1 = arrChooseColor[0];
      const buf2 = arrChooseColor[1];
      const buf3 = arrChooseColor[2];

      arrChooseColor[0] = buf3;
      arrChooseColor[1] = buf1;
      arrChooseColor[2] = buf2;

      currentColor.classList.add(arrChooseColor[0]);
      prevColor.classList.add(arrChooseColor[1]);
      firstColor.classList.add(arrChooseColor[2]);

      if (arrChooseColor[2].indexOf('green') !== -1) {
        firstColor.lastElementChild.innerHTML = 'Green';
      }
      if (arrChooseColor[2].indexOf('grey') !== -1) {
        firstColor.lastElementChild.innerHTML = 'Grey';
      }
      if (arrChooseColor[2].indexOf('red') !== -1) {
        firstColor.lastElementChild.innerHTML = 'Red';
      }
      if (arrChooseColor[2].indexOf('blue') !== -1) {
        firstColor.lastElementChild.innerHTML = 'Blue';
      }
    }

    if (this.classList.contains(arrChooseColor[3])) {
      currentColor.classList.remove(arrChooseColor[0]);
      prevColor.classList.remove(arrChooseColor[1]);
      secondColor.classList.remove(arrChooseColor[3]);

      const buf1 = arrChooseColor[0];
      const buf2 = arrChooseColor[1];
      const buf4 = arrChooseColor[3];

      arrChooseColor[0] = buf4;
      arrChooseColor[1] = buf1;
      arrChooseColor[3] = buf2;

      currentColor.classList.add(arrChooseColor[0]);
      prevColor.classList.add(arrChooseColor[1]);
      secondColor.classList.add(arrChooseColor[3]);

      if (arrChooseColor[3].indexOf('green') !== -1) {
        secondColor.lastElementChild.innerHTML = 'Green';
      }
      if (arrChooseColor[3].indexOf('grey') !== -1) {
        secondColor.lastElementChild.innerHTML = 'Grey';
      }
      if (arrChooseColor[3].indexOf('red') !== -1) {
        secondColor.lastElementChild.innerHTML = 'Red';
      }
      if (arrChooseColor[3].indexOf('blue') !== -1) {
        secondColor.lastElementChild.innerHTML = 'Blue';
      }
    }
  }
}

prevColor.addEventListener('click', chooseCurentColor);
firstColor.addEventListener('click', chooseCurentColor);
secondColor.addEventListener('click', chooseCurentColor);

function viewBlock() {
  if (bucket.className.indexOf('tornOn') !== -1) {
    this.classList.remove(this.classList[this.classList.length - 1]);
    this.classList.add(arrChooseColor[0]);
    if (
      this.classList.length === 4
            && this.classList[this.classList.length - 1] !== 'circle'
    ) {
      this.classList.remove(this.classList[this.classList.length - 2]);
      this.classList.add('circle');
    }
  }

  if (transform.className.indexOf('tornOn') !== -1) {
    this.classList.toggle('circle');
  }

  if (
    chooseColor.className.indexOf('tornOn') !== -1
        && arrChooseColor[0] !== this.classList[2]
  ) {
    let indexArr = 0;
    for (let i = 1; i < arrChooseColor.length; i += 1) {
      if (arrChooseColor[i] === this.classList[2]) {
        indexArr = i;
        break;
      }
    }

    const buf1 = arrChooseColor[0];
    const buf2 = arrChooseColor[1];

    // eslint-disable-next-line
    arrChooseColor[0] = this.classList[2];

    currentColor.classList.remove(arrChooseColor[0]);
    prevColor.classList.remove(arrChooseColor[1]);
    firstColor.classList.remove(arrChooseColor[2]);
    secondColor.classList.remove(arrChooseColor[3]);

    if (indexArr === 1) {
      arrChooseColor[1] = buf1;
    }
    if (indexArr === 2) {
      arrChooseColor[1] = buf1;
      arrChooseColor[2] = buf2;

      if (arrChooseColor[2].indexOf('green') !== -1) {
        firstColor.lastElementChild.innerHTML = 'Green';
      }
      if (arrChooseColor[2].indexOf('grey') !== -1) {
        firstColor.lastElementChild.innerHTML = 'Grey';
      }
      if (arrChooseColor[2].indexOf('red') !== -1) {
        firstColor.lastElementChild.innerHTML = 'Red';
      }
      if (arrChooseColor[2].indexOf('blue') !== -1) {
        firstColor.lastElementChild.innerHTML = 'Blue';
      }
    }

    if (indexArr === 3) {
      arrChooseColor[1] = buf1;
      arrChooseColor[3] = buf2;
      if (arrChooseColor[3].indexOf('green') !== -1) {
        secondColor.lastElementChild.innerHTML = 'Green';
      }
      if (arrChooseColor[3].indexOf('grey') !== -1) {
        secondColor.lastElementChild.innerHTML = 'Grey';
      }
      if (arrChooseColor[3].indexOf('red') !== -1) {
        secondColor.lastElementChild.innerHTML = 'Red';
      }
      if (arrChooseColor[3].indexOf('blue') !== -1) {
        secondColor.lastElementChild.innerHTML = 'Blue';
      }
    }

    currentColor.classList.add(arrChooseColor[0]);
    prevColor.classList.add(arrChooseColor[1]);
    firstColor.classList.add(arrChooseColor[2]);
    secondColor.classList.add(arrChooseColor[3]);

    if (currentColor.classList.length === 4) {
      currentColor.classList.remove(
        currentColor.classList[currentColor.classList.length - 2],
      );
    }
  }
}

const block1 = document.querySelector('.block1');
block1.addEventListener('click', viewBlock);

const block2 = document.querySelector('.block2');
block2.addEventListener('click', viewBlock);

const block3 = document.querySelector('.block3');
block3.addEventListener('click', viewBlock);

const block4 = document.querySelector('.block4');
block4.addEventListener('click', viewBlock);

const block5 = document.querySelector('.block5');
block5.addEventListener('click', viewBlock);

const block6 = document.querySelector('.block6');
block6.addEventListener('click', viewBlock);

const block7 = document.querySelector('.block7');
block7.addEventListener('click', viewBlock);

const block8 = document.querySelector('.block8');
block8.addEventListener('click', viewBlock);

const block9 = document.querySelector('.block9');
block9.addEventListener('click', viewBlock);

// 4 move tool

// Fields 2
const fieldsConteiner = document.querySelector('.fields-container');


function makeMoveClick(event) {
  if (move.className.indexOf('tornOn') !== -1) {
    const block = event.target;

    const fieldsConteinerCoords = this.getBoundingClientRect();

    const fieldsConteinerInnerCoords = {
      top: fieldsConteinerCoords.top + fieldsConteiner.clientTop,
      left: fieldsConteinerCoords.left + fieldsConteiner.clientLeft,
    };

    const blockCoords = {
      top: event.clientY - fieldsConteinerInnerCoords.top - block.clientHeight / 2,
      left: event.clientX - fieldsConteinerInnerCoords.left - block.clientWidth / 2,
    };

    if (blockCoords.top < 0) blockCoords.top = 0;

    if (blockCoords.left < 0) blockCoords.left = 0;

    if (blockCoords.left + block.clientWidth > fieldsConteiner.clientWidth) {
      blockCoords.left = fieldsConteiner.clientWidth - block.clientWidth;
    }

    if (blockCoords.top + block.clientHeight > fieldsConteiner.clientHeight) {
      blockCoords.top = fieldsConteiner.clientHeight - block.clientHeight;
    }

    block.style.left = `${blockCoords.left}px`;
    block.style.top = `${blockCoords.top}px`;
    block.style.zIndex = 1000;
  }
}

fieldsConteiner.addEventListener('click', makeMoveClick);

// 6.Keyboard

function makeKeyboard(e) {
  if (e.keyCode === 9 && e.target === bucket) {
    block1.style.fontSize = 'red';
    block5.style.backroundColor = 'red';
    block9.style.backroundColor = 'red';
    block3.style.backroundColor = 'blue';
    block7.style.backroundColor = 'blue';
    block2.style.backroundColor = 'grey';
    block8.style.backroundColor = 'grey';
  }
}

document.addEventListener('keydown', makeKeyboard);
