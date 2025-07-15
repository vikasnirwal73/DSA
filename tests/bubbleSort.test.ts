import quickSort from "../src/algos/bubbleSort";

describe('quickSort edge cases', () => {
  test('should return an empty array if an empty array is passed', () => {
    expect(quickSort([])).toEqual([]);
  });

  test('should return the same array if an array with one element is passed', () => {
    expect(quickSort([5])).toEqual([5]);
  });

  test('should correctly sort an array with duplicate elements', () => {
    const unsortedArray = [5, 2, 8, 3, 1, 6, 4, 2, 8];
    const sortedArray = [1, 2, 2, 3, 4, 5, 6, 8, 8];
    expect(quickSort(unsortedArray)).toEqual(sortedArray);
  });

  test('should correctly sort an array that is already sorted', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 8];
    expect(quickSort(sortedArray)).toEqual(sortedArray);
  });

  test('should correctly sort an array that is sorted in descending order', () => {
    const unsortedArray = [8, 6, 5, 4, 3, 2, 1];
    const sortedArray = [1, 2, 3, 4, 5, 6, 8];
    expect(quickSort(unsortedArray)).toEqual(sortedArray);
  });

  test('should correctly sort an array with negative numbers', () => {
    const unsortedArray = [-5, 2, -8, 3, 1, -6, 4];
    const sortedArray = [-8, -6, -5, 1, 2, 3, 4];
    expect(quickSort(unsortedArray)).toEqual(sortedArray);
  });
});