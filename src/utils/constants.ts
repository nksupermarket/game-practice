import Player from './Factories/Player';

export const gravity = 1;
export const speed = 20;
export const jumpHeight = -12;
export const getBoundaryRight = (canvasWidth: number) =>
  canvasWidth / 2 - Player().width;
export const boundaryLeft = 200;
