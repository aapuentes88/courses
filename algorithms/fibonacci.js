{
  fibonacciIter = (n) => {
    let ans = [0, 1];
    let fnum = 2;
    for (let i = 1; fnum <= n; i++) {
      if (i === ans[fnum - 1] + ans[fnum - 2]) {
        ans[fnum] = ans[fnum - 1] + ans[fnum - 2]
        fnum++;
      }
    }

    return ans[n];
  }

  fibonacciRec = (n) => {

    if (n < 2)
      return n;

    return fibonacciRec(n - 1) + fibonacciRec(n - 2);

  }
  console.log(fibonacciIter(12));
  console.log(fibonacciRec(12));
}