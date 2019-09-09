//  windowPreview
// Animation
// ul ixpecting upper

let currentFrame = 1;
let count = 0;

let counterSpeed = 0;

const framesPreview = [];

const controlSpeed = document.querySelector('.control-speed-animation');

const listFramesPreview = document.querySelector('.list-frames');

function cloneCanvas(oldCanvas) {
  // create a new canvas
  const newCanvas = document.getElementById('screen-canvas');

  const context = newCanvas.getContext('2d');

  // set dimensions
  newCanvas.width = oldCanvas.width;
  newCanvas.height = oldCanvas.height;

  // apply the old canvas to the new one
  context.drawImage(oldCanvas, 0, 0);

  // return the new canvas
  return newCanvas;
}

function getFramesPreview() {
  for (let i = 0; i < listFramesPreview.children.length; i += 1) {
    const canvasPreview = listFramesPreview.children[i].querySelector('.canvas');

    framesPreview.push(canvasPreview);
  }
}

let timerId;

function startAnimation() {
  if (timerId) {
    clearInterval(timerId);
  }

  timerId = setInterval(() => {
    getFramesPreview();
    currentFrame = framesPreview[count % framesPreview.length];

    cloneCanvas(currentFrame);

    count += 1;
  }, 1000 / counterSpeed);
}


const start = document.getElementById('start-animation');
start.addEventListener('click', () => {
  counterSpeed = 1;
  controlSpeed.innerHTML = counterSpeed;
  count = 0;

  startAnimation();
});

// SpeedAnimation

const decreaseSpeedAnimation = document.getElementById('slowly-animation');
decreaseSpeedAnimation.addEventListener('click', () => {
  if (counterSpeed > 1) {
    counterSpeed -= 1;
    controlSpeed.innerHTML = counterSpeed;
    count = 0;
  }


  startAnimation();
});

const increaseSpeedAnimation = document.getElementById('faster-animation');
increaseSpeedAnimation.addEventListener('click', () => {
  if (counterSpeed < 24) {
    counterSpeed += 1;
    controlSpeed.innerHTML = counterSpeed;
    count = 0;
  }

  startAnimation();
});


// FullScreen

const fullScreen = document.getElementById('full-screen-animation');

const screenCanvas = document.getElementById('screen-canvas');

function getFullScreen(canvas) {
  if (canvas.requestFullscreen) {
    canvas.requestFullscreen();
  }
}

function getExitFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
}

fullScreen.addEventListener('click', (() => {
  getFullScreen(screenCanvas);
}));

screenCanvas.addEventListener('click', (() => {
  getExitFullScreen();
}));
