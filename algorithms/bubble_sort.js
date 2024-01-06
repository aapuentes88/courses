{
  bubbleSort = (arr) => {
    let aux = 0;
    for(let i = arr.length-1; i >= 0; i--){
      for(let j = 0; j <= i-1; j++){
         if(arr[j] > arr[j+1]){
           aux = arr[j];
           arr[j] = arr[j+1];
           arr[j+1] = aux;
         }
      }
    }

    return arr;
  }

  console.log(bubbleSort([99,44,6, 2, 1, 5, 63, 87, 283, 4, 0]));
}