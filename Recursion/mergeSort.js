function mergeSort(array) {
  if (array.length > 1) {
    let midPoint = Math.floor(array.length / 2);
    let leftArray = array.slice(0, midPoint);
    let rightArray = array.slice(midPoint);
    mergeSort(leftArray);
    mergeSort(rightArray);
    let i = 0,
      j = 0,
      k = 0;
    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] < rightArray[j]) {
        array[k] = leftArray[i];
        i++;
        k++;
      } else {
        array[k] = rightArray[j];
        j++;
        k++;
      }
    }
    while (i < leftArray.length) {
      array[k] = leftArray[i];
      i++;
      k++;
    }
    while (j < rightArray.length) {
      array[k] = rightArray[j];
      j++;
      k++;
    }
    return array;
  }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
