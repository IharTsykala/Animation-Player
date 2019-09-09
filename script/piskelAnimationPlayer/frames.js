// piskelAnimationPlayer();

// frames: add, delete, dublicate

const fieldsConteinerNew = document.querySelector('.fields-container');

const listFrames = document.querySelector('.list-frames');

function addNewFrame() {
  const li = document.createElement('li');
  li.className = 'frame active';
  for (let i = 0; i < listFrames.children.length; i += 1) {
    listFrames.children[i].classList = 'frame';
  }
  listFrames.appendChild(li);

  const canvas = document.createElement('canvas');
  canvas.className = 'canvas';
  canvas.width = 150;
  canvas.height = 150;
  li.appendChild(canvas);

  const deleteFrame = document.createElement('div');
  deleteFrame.className = 'delete-canvas-frame';
  deleteFrame.innerHTML = 'del';
  li.appendChild(deleteFrame);

  const dublicateFrame = document.createElement('div');
  dublicateFrame.className = 'duplicate-canvas-frame';
  dublicateFrame.innerHTML = 'dup';
  li.appendChild(dublicateFrame);
}

const addFrame = document.querySelector('.add-frames');
addFrame.addEventListener('click', addNewFrame);

listFrames.addEventListener('click', (event) => {
  let { target } = event;
  while (target.tagName !== 'UL') {
    if (target.tagName === 'LI') {
      for (let i = 0; i < listFrames.children.length; i += 1) {
        listFrames.children[i].className = 'frame';
      }
      target.className = 'frame active';
      return;
    }
    target = target.parentNode;
  }
});

listFrames.addEventListener('click', (event) => {
  const { target } = event;

  if (target.className === 'delete-canvas-frame') {
    target.parentNode.remove();
  }
});

function getCloneCanvas(oldCanvas, cloneFrameCanvas) {
  // create a new canvas
  const newCanvas = cloneFrameCanvas;


  const context = newCanvas.getContext('2d');

  // set dimensions
  newCanvas.width = oldCanvas.width;
  newCanvas.height = oldCanvas.height;

  // apply the old canvas to the new one
  context.drawImage(oldCanvas, 0, 0);

  // return the new canvas
  return newCanvas;
}

function getDublicateFrame(target) {
  const referenceFrameCanvas = target.parentNode.querySelector('.canvas');

  const cloneFrame = target.parentNode.cloneNode(true);

  const cloneFrameCanvas = cloneFrame.querySelector('.canvas');
  cloneFrame.className = 'frame';

  listFrames.insertBefore(cloneFrame, target.parentNode.nextElementSibling);

  getCloneCanvas(referenceFrameCanvas, cloneFrameCanvas);
}

listFrames.addEventListener('click', (event) => {
  const { target } = event;

  if (target.className === 'duplicate-canvas-frame') {
    getDublicateFrame(target);
  }
});

function drawFrames(event) {
  const { target } = event;

  const frameActive = document.querySelector('.active');

  const canvas = frameActive.getElementsByClassName('canvas')[0];
  const ctx = canvas.getContext('2d');

  const divShape = [];
  const divBackround = [];

  function fillDivShape() {
    for (let i = 0; i < fieldsConteinerNew.children.length; i += 1) {
      if (fieldsConteinerNew.children[i].classList.contains('circle')) {
        divShape[i] = 'circle';
      } else {
        divShape[i] = 'square';
      }
    }
  }
  fillDivShape();

  function fillDivBackround() {
    for (let i = 0; i < fieldsConteinerNew.children.length; i += 1) {
      if (fieldsConteinerNew.children[i].classList.contains('color-green')) {
        divBackround[i] = 'green';
      } else if (fieldsConteinerNew.children[i].classList.contains('color-grey')) {
        divBackround[i] = 'grey';
      } else if (fieldsConteinerNew.children[i].classList.contains('color-red')) {
        divBackround[i] = 'red';
      } else {
        divBackround[i] = 'blue';
      }
    }
  }
  fillDivBackround();

  function drawCanvas(targetBlock) {
    let x = 0;
    let y = 0;
    let i = 0;
    const pi = Math.PI;

    function getfigure() {
      if (divShape[i] === 'circle') {
        ctx.beginPath();
        ctx.clearRect(x, y, 50, 50);
        ctx.arc(x + 25, y + 25, 25, 0, 2 * pi, false);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.clearRect(x, y, 50, 50);
        ctx.fillRect(x, y, 50, 50);
      }
    }

    function drawFrame() {
      if (divBackround[i] === 'green') {
        ctx.fillStyle = 'green';
        getfigure();
      } else if (divBackround[i] === 'grey') {
        ctx.fillStyle = 'grey';
        getfigure();
      } else if (divBackround[i] === 'red') {
        ctx.fillStyle = 'red';
        getfigure();
      } else {
        ctx.fillStyle = 'blue';
        getfigure();
      }
    }

    if (targetBlock.classList.contains('block1')) {
      x = 0;
      y = 0;
      i = 0;
      drawFrame();
    }
    if (targetBlock.classList.contains('block2')) {
      x = 50;
      y = 0;
      i = 1;
      drawFrame();
    }
    if (targetBlock.classList.contains('block3')) {
      x = 100;
      y = 0;
      i = 2;
      drawFrame();
    }
    if (targetBlock.classList.contains('block4')) {
      x = 0;
      y = 50;
      i = 3;
      drawFrame();
    }
    if (targetBlock.classList.contains('block5')) {
      x = 50;
      y = 50;
      i = 4;
      drawFrame();
    }
    if (targetBlock.classList.contains('block6')) {
      x = 100;
      y = 50;
      i = 5;
      drawFrame();
    }
    if (targetBlock.classList.contains('block7')) {
      x = 0;
      y = 100;
      i = 6;
      drawFrame();
    }
    if (targetBlock.classList.contains('block8')) {
      x = 50;
      y = 100;
      i = 7;
      drawFrame();
    }
    if (targetBlock.classList.contains('block9')) {
      x = 100;
      y = 100;
      i = 8;
      drawFrame();
    }
  }

  drawCanvas(target);
}

fieldsConteinerNew.addEventListener('click', drawFrames);
