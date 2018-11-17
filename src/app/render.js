const HALF = 0.5;

const randomRange = (min, max) => (Math.random() * (max - min)) + min;
const randomDirection = () => Math.random() > HALF ? 1 : -1; // eslint-disable-line no-confusing-arrow

export default function render(ctx, config) {
  const halfWidth = Math.floor(config.WIDTH * HALF);

  /* Reset canvas. */
  ctx.fillStyle = config.BACKGROUND;
  ctx.fillRect(0, 0, config.WIDTH, config.HEIGHT);

  /* For debugging, display line in the middle of the canvas. */
  ctx.fillStyle = '#f00';
  ctx.fillRect(halfWidth - HALF, 0, 1, config.HEIGHT);

  /* Setup starting point. */
  ctx.beginPath();
  ctx.moveTo(halfWidth, 0);
  let currentVertical = 0;

  while (currentVertical < config.HEIGHT) {
    const horizontalMove = randomRange(config.MIN_X, config.MAX_X);
    const verticaMove = randomRange(config.MIN_Y, config.MAX_Y);
    const direction = randomDirection();

    currentVertical += verticaMove;
    ctx.lineTo(halfWidth + (direction * horizontalMove), currentVertical);
  }

  ctx.stroke();
}
