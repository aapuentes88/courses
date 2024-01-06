{
  const firstRecurringChar = (arr) => {
    const myMap = {};
    for (let i = 0; i < arr.length; i++) {
      if (myMap[arr[i]] !== undefined) {
        return arr[i];
      }
      myMap[arr[i]] = null;
    }

    return undefined;
  }

  console.log(firstRecurringChar([2, 1, 4, 4, 3, 5, 6, 5, 6]));
}