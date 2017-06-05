(function() {
  'use strict';
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  const width = window.innerWidth * 0.6;
  const height = window.innerHeight * 0.6;

  const radius = Math.min(width, height) * 0.5;

  // Number of layers
  const numberOfLayers = 400;
  const layers = [];

  // Width/height of layers
  const layerSize = radius * 0.25;

  // Layers that overlap to create the infinity illusion
  const layerOverlap = Math.round(numberOfLayers * 0.1);

  function init() {
    for (var i = 0; i < numberOfLayers; i++) {
      layers.push({
        x:
          width / 2 +
            Math.sin(i / numberOfLayers * 2 * Math.PI) * (radius - layerSize),
        y:
          height / 2 +
            Math.cos(i / numberOfLayers * 2 * Math.PI) * (radius - layerSize),
        r: i / numberOfLayers * 1000 * Math.PI
      });
    }

    resize();
    update();
  }

  function resize() {
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = 'absolute';
    canvas.style.left = 0;
    canvas.style.right = 0;
    canvas.style.margin = 'auto';
    canvas.style.top = '50%';
    canvas.style.transform = 'translateY(-50%)';
    canvas.style.zIndex = 1;
  }

  function update() {
    requestAnimationFrame(update);
    step();
    clear();
    paint();
  }

  // Takes a step in the simulation
  function step() {
    for (var i = 0, len = layers.length; i < len; i++) {
      layers[i].r += 0.005;
    }
  }

  // Clears the painting
  function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Paints the current state
  function paint() {
    // Number of layers in total
    const layersLength = layers.length;
    // Draw the overlap layers
    for (
      let i = layersLength - layerOverlap, len = layersLength;
      i < len;
      i++
    ) {
      context.save();
      context.globalCompositeOperation = 'destination-over';
      paintLayer(layers[i]);
      context.restore();
    }

    // Cut out the overflow layers using the first layer as a mask
    context.save();
    context.globalCompositeOperation = 'destination-in';
    paintLayer(layers[0], true);
    context.restore();

    // // Draw the normal layers underneath the overlap
    for (var i = 0, len = layersLength; i < len; i++) {
      context.save();
      context.globalCompositeOperation = 'destination-over';
      paintLayer(layers[i]);
      context.restore();
    }
  }

  // Pains one layer
  function paintLayer(layer, mask) {
    const size = layerSize + (mask ? 10 : 0);
    const size2 = size / 2;

    context.translate(layer.x, layer.y);
    context.rotate(layer.r);

    // No stroke if this is a mask
    if (!mask) {
      context.strokeStyle = '#06ED86';
      context.lineWidth = 1;
      context.strokeRect(-size2, -size2, size, size);
    }

    context.fillStyle = '#333';
    context.fillRect(-size2, -size2, size, size);
  }

  init();
})();
