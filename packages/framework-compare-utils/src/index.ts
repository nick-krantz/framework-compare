export const millisecondDisplay = (ms: number): string => {
  var minutes = Math.floor(ms / 60000);
  var seconds = Number(((ms % 60000) / 1000).toFixed(0));

  if (isNaN(minutes) || isNaN(seconds)) {
    return "0:00";
  }

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};
