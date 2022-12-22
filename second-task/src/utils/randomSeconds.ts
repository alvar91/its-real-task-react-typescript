export const randomSeconds = () => {
  const min = 10;
  const max = 30;

  return Math.random() * (max - min) + min;
};
