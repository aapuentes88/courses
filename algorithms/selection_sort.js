{
  selectionSort  = (arr) => {

    for(let i = 0; i <  arr.length; i++){
      let min = arr[i];
      let pos = i;
      for(let j = i+1; j <  arr.length; j++){
        if(min > arr[j]){
          min = arr[j];
          pos = j;
        }
      }
      if(i !== pos){
        let tmp = arr[i];
        arr[i] = min;
        arr[pos] = tmp;
      }
    }
    return arr;
  }

  console.log(selectionSort([99,44,6, 2, 1, 5, 63, 87, 283, 4, 0]));
}