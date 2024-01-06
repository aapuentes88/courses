{
  mergeSort  = (arr) => {
    if(arr.length === 1)
      return arr;

    // let left = arr.splice(0,arr.length/2);
    // let right = arr;
    let left = arr.slice(0,arr.length/2);
    let right = arr.slice(arr.length/2,arr.length);

    return merge(left, right);
  }

  merge = (left, right) => {

    let arr = [];
    let l = mergeSort(left);
    let r = mergeSort(right);
    let i = 0, j = 0, count = 0;
    
    while(i < l.length && j < r.length){
      if(l[i]<r[j]){
        arr[count] = l[i];
        i++;
      } else {
        arr[count] = r[j];
        j++;
      }
      count++;
    }

    if(i < l.length)
     arr.push(...l.slice(i,l.length));
    if(j < r.length)
     arr.push(...r.slice(j,r.length))

     return arr;
  }

  console.log(mergeSort([99,44,6, 80, 2, 1, 5, 63, 87, 283, 4, 0]));

}
