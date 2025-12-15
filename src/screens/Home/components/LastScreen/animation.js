export default () => {
  const canvas = document.getElementById('last-screen-canvas');
  const context = canvas.getContext('2d');

  let i = 0;
  const frameCount = 29;

  const currentFrame = () => {
    if (i >= frameCount) {
      i = 0;
      // Animation loop
      return `/auto_animation_figures/FIGURE_4_0000${0}.png`;
    }
    i += 1;
    return `/auto_animation_figures/FIGURE_4_0000${i}.png`;
  };

  const img = new Image();
  img.src = currentFrame(0);
  img.onload = () => {
    context.drawImage(img, 0, 0, 200, 200);
  };

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i += 1) {
      const img = new Image(200, 200);
      img.src = currentFrame();
    }
  };

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const animate = () => {
    context.clearRect(0, 0, 200, 200);
    img.src = currentFrame();
    context.drawImage(img, 0, 0, 200, 200);
    window.requestAnimationFrame(animate);
  };

  const init = () => {
    preloadImages();
    window.requestAnimationFrame(animate);
  };

  init();
};
