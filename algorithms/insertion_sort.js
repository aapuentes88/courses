{
  insertionSort  = (arr) => {
    const ans = [arr[0]];
    for(let i = 0; i <  arr.length; i++){
      let ins = arr[i];
      for(let j = 0; j <  ans.length; j++){
        if(ins < ans[j]){
          let tmp = ans[j];
          ans[j] = ins; 
          ins = tmp;
        }
      }
      ans.push(ins);
    }  
    return ans;
  }
  console.log(insertionSort([99,44,6, 2, 1, 5, 63, 87, 283, 4, 0]));
}