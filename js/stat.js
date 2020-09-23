'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 110;
const CLOUD_Y = 10;
const COLUMN_GAP = 50;
const GAP = 10;
const TEXT_HEIGHT = 16;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;
const font = {
  SIZE: `16px`,
  FAMILY: `PT Mono`
};


const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.fillStyle = `#000`;
  ctx.font = `${font.SIZE} ${font.FAMILY}`;
  ctx.fillText(`Ура вы победили !`, CLOUD_X + GAP, CLOUD_Y + GAP + TEXT_HEIGHT);
  ctx.fillText(`Список результатов :`, CLOUD_X + GAP, CLOUD_Y + (GAP + TEXT_HEIGHT) * 2);
  const maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    ctx.fillStyle = `#000`;
    ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_GAP + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT - GAP * 3 - (BAR_HEIGHT * times[i] / maxTime));
    ctx.fillStyle = `hsl(217,` + (25 + Math.random()) + `%,` + (85 * Math.random()) + `%)`;
    if (players[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    }
    ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT - GAP * 2, BAR_WIDTH, -BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = `#000`;
    ctx.fillText(players[i], CLOUD_X + COLUMN_GAP + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
  }

};
