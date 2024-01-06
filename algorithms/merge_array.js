{
  const mergeArr = (arr1, arr2) => {

    const merged = [];
    let i = 0, j = 0, count = 0;

    while (i < arr1.length || j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged[count++] = arr1[i];
        i++;

      } else {
        merged[count++] = arr2[j];
        j++;
      }

    }
    return merged;
  }
  console.log(mergeArr([0, 3, 6, 7], [-4, 5, 7, 8, 9]));

}