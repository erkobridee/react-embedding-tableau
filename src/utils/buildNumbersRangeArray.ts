// inclusive range
export const buildNumbersRangeArray = (start = 0, end = 10, step = 1) =>
  Array.from(
    Array.from(Array(Math.ceil((end - start + 1) / step)).keys()),
    (x) => start + x * step
  );

export default buildNumbersRangeArray;
